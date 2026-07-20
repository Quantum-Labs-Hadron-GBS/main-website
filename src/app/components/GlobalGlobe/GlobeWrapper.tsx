"use client";

import { usePathname } from "next/navigation";
import GlobalGlobe from "./GlobalGlobe";

export default function GlobeWrapper() {
  const pathname = usePathname();
  
  // If we are not on the homepage, apply a blur effect
  const isSubPage = pathname !== "/";

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: isSubPage ? 'none' : 'auto', // disable interaction on subpages
        filter: isSubPage ? 'blur(2px) saturate(120%) opacity(0.85)' : 'none',
        transition: 'filter 800ms ease, opacity 800ms ease',
      }}
      aria-hidden={isSubPage ? "true" : "false"}
    >
      <GlobalGlobe isSubPage={isSubPage} />
    </div>
  );
}
