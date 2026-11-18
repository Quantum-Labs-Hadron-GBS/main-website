"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/** Image that drifts slightly inside its (overflow-hidden) frame while scrolling. */
export default function ParallaxImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-7%", "7%"]);

  return (
    <div ref={ref} style={{ overflow: "hidden" }}>
      <motion.img src={src} alt={alt} className={className} style={{ y, scale: 1.16 }} />
    </div>
  );
}
