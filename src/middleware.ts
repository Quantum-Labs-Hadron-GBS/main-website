import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// The staff portal (portal.hadrongbs.com, NextAuth + RBAC) is not built yet; its middleware was removed
// for launch to keep the Cloudflare Worker small. See git history and docs/ARCHITECTURE.md to restore it.

export function middleware(req: NextRequest) {
  const host = (req.headers.get("host") || "").split(":")[0];

  // One canonical host: hadrongbs.com → www.hadrongbs.com (same as the old WordPress site, which Google indexed)
  if (host === "hadrongbs.com") {
    const url = req.nextUrl.clone();
    url.protocol = "https";
    url.host = "www.hadrongbs.com";
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  const res = NextResponse.next();

  // Keep preview/staging hosts (workers.dev, vercel.app, localhost…) out of Google so they
  // don't compete with www.hadrongbs.com as duplicate content
  if (!/(^|\.)hadrongbs\.com$/.test(host)) {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return res;
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
