"use client";

import { usePathname } from "next/navigation";
import GlobalGlobe from "./GlobalGlobe";

export default function GlobeWrapper() {
  const pathname = usePathname();
  
  // Do not render the globe on the homepage (Global Presence removed) or services page
  if (pathname === "/" || pathname === "/services" || pathname.startsWith("/redesign")) {
    return null;
  }
  
  // If we are not on the homepage, make it a subtle background element
  const isSubPage = pathname !== "/";

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: isSubPage ? 'none' : 'auto', // disable interaction on subpages
        filter: isSubPage ? 'opacity(0.4)' : 'none',
        transition: 'filter 800ms ease',
      }}
      aria-hidden={isSubPage ? "true" : "false"}
    >
      <GlobalGlobe isSubPage={isSubPage} />
    </div>
  );
}
