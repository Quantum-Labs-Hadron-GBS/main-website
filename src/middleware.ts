import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host") || "";
  let shouldRewrite = false;

  // 1. Rewrite `portal.hadrongbs.com` to `/portal`
  if (hostname === "portal.hadrongbs.com" || hostname.startsWith("portal.")) {
    if (!url.pathname.startsWith("/portal") && !url.pathname.startsWith("/api/auth")) {
      url.pathname = `/portal${url.pathname === "/" ? "" : url.pathname}`;
      shouldRewrite = true;
    }
  }

  // 2. Protect `/portal` routes
  if (url.pathname.startsWith("/portal") && !url.pathname.startsWith("/portal/login")) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    
    // Redirect to login if not authenticated
    if (!token) {
      const loginUrl = new URL("/portal/login", req.url);
      loginUrl.searchParams.set("callbackUrl", req.url);
      return NextResponse.redirect(loginUrl);
    }
    
    // RBAC Check for Sales
    if (url.pathname.startsWith("/portal/sales") && token.role !== "SALES" && token.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/portal/dashboard", req.url));
    }
    
    // RBAC Check for HR
    if (url.pathname.startsWith("/portal/hr") && token.role !== "HR" && token.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/portal/dashboard", req.url));
    }
  }

  if (shouldRewrite) {
    return NextResponse.rewrite(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (e.g. SVG)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
