"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const GlobalGlobe = dynamic(() => import("./GlobalGlobe"), { ssr: false });

export default function GlobeWrapper() {
  const pathname = usePathname();
  
  // If we are not on the homepage, make it a subtle background element
  const isSubPage = pathname !== "/";

  return (
    <div 
      style={{ 
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        filter: isSubPage ? 'blur(8px)' : 'none', 
        opacity: isSubPage ? 0.3 : 1, 
        transition: 'all 0.5s ease' 
      }}
      aria-hidden={isSubPage ? "true" : "false"}
    >
      <GlobalGlobe isSubPage={isSubPage} />
    </div>
  );
}
