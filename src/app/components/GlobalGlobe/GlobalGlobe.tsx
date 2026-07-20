/* eslint-disable */
"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

/* ─────────────────────────────────────────────────────────────
   Helpers
──────────────────────────────────────────────────────────────── */
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const lerpAngle = (a: number, b: number, t: number) => {
  const d = ((b - a + 540) % 360) - 180;
  return a + d * t;
};
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

/* ─────────────────────────────────────────────────────────────
   Arc line types (hero phase only)
──────────────────────────────────────────────────────────────── */
const CITIES: [number, number][] = [
  [-74.006, 40.713], [-0.128, 51.507],  [2.352, 48.857],
  [139.692, 35.690], [103.820, 1.352],  [151.209, -33.869],
  [28.978, 41.008],  [37.617, 55.756],  [55.271, 25.205],
  [77.103, 28.704],  [-99.133, 19.433], [144.963, -37.814],
];

interface Arc {
  src: [number, number]; tgt: [number, number];
  progress: number; fade: number; speed: number;
  phase: "draw" | "hold" | "erase"; holdTick: number;
}

function mkArc(): Arc {
  const i = Math.floor(Math.random() * CITIES.length);
  let j = Math.floor(Math.random() * CITIES.length);
  while (j === i) j = Math.floor(Math.random() * CITIES.length);
  return { src: CITIES[i], tgt: CITIES[j], progress: 0, fade: 0,
           speed: 0.004 + Math.random() * 0.006, phase: "draw", holdTick: 0 };
}

/* ─────────────────────────────────────────────────────────────
   Globe state targets
   cxF / cyF : globe-centre position as fraction of viewport W / H
   rF        : sphere radius as fraction of viewport H (before zoom)
   zoom      : multiplier on rF*H                                  
──────────────────────────────────────────────────────────────── */
interface GTarget {
  cxF: number; cyF: number; rF: number; zoom: number;
  rot: [number, number]; auto: boolean;
  marker: [number, number] | null;
  name?: string;
}

const HERO: GTarget = {
  cxF: 0.5, cyF: 1.00, rF: 0.90, zoom: 1.0,
  rot: [-60, -20], auto: true, marker: null,
};

const LANG: GTarget[] = [
  /* Pune       */ { cxF: 0.74, cyF: 0.50, rF: 0.22, zoom: 3.7, rot: [-73.85, -18.52], auto: false, marker: [73.85, 18.52], name: "Pune, India" },
  /* Singapore  */ { cxF: 0.74, cyF: 0.50, rF: 0.22, zoom: 3.7, rot: [-103.82, -1.35], auto: false, marker: [103.82, 1.35], name: "Singapore" },
  /* Dubai      */ { cxF: 0.74, cyF: 0.50, rF: 0.22, zoom: 3.7, rot: [-55.27, -25.20], auto: false, marker: [55.27, 25.20], name: "Dubai, UAE" },
  /* USA        */ { cxF: 0.74, cyF: 0.50, rF: 0.22, zoom: 3.7, rot: [75.52, -39.15],  auto: false, marker: [-75.52, 39.15], name: "Dover, USA" },
  /* Leave      */ { cxF: 0.74, cyF: 0.50, rF: 0.22, zoom: 0.88, rot: [0, -20],        auto: true,  marker: null },
];

/* ─────────────────────────────────────────────────────────────
   Component
──────────────────────────────────────────────────────────────── */
export default function GlobalGlobe({ isSubPage = false }: { isSubPage?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    /* ── size canvas to full viewport ── */
    const W_ref = { current: window.innerWidth };
    const H_ref = { current: window.innerHeight };
    // Cap DPR at 2 — on 3x retina devices this cuts canvas pixels by ~44%
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      W_ref.current = window.innerWidth;
      H_ref.current = window.innerHeight;
      canvas.width  = W_ref.current * dpr;
      canvas.height = H_ref.current * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    canvas.width  = W_ref.current * dpr;
    canvas.height = H_ref.current * dpr;
    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);

    window.addEventListener("resize", resize, { passive: true });

    /* ── D3 setup ── */
    const projection = d3.geoOrthographic()
      .scale(100).translate([0, 0]).clipAngle(90).rotate([-60, -20]);
    const pathGen = d3.geoPath().projection(projection).context(ctx);

    /* ── Live lerped state ── */
    let livCxF = 0.5,  livCyF = 1.0,  livRF = 0.90, livZoom = 1.0;
    let livRot: [number, number] = [-60, -20];
    let livOpa = 1.0;
    let autoAngle = -60;

    /* ── Arc lines (hero) ── */
    const MAX_ARCS = 6;
    const arcs: Arc[] = [];
    let frame = 0;
    let landData: any = null;
    let animId: number;
    let isVisible = !document.hidden; // Page Visibility API

    /* ── Colour helper — cached, refreshed every 60 frames ── */
    const getC = () => {
      const s = getComputedStyle(document.documentElement);
      return {
        fg:     s.getPropertyValue("--fg").trim()            || "#f0f0f0",
        subtle: s.getPropertyValue("--fg-subtle").trim()     || "#555",
        border: s.getPropertyValue("--border-strong").trim() || "rgba(255,255,255,0.2)",
        accent: s.getPropertyValue("--accent").trim()        || "#E8A020",
      };
    };
    let colorCache = getC();

    /* ── Compute scroll-driven target ── */
    const getTarget = (): GTarget & { opacity: number } => {
      if (isSubPage) {
        return {
          cxF: 1,
          cyF: 0.5,
          rF: 0.3,
          zoom: 1.0,
          rot: [-60, -20],
          auto: true,
          marker: null,
          opacity: 1
        };
      }

      const W = W_ref.current;
      const H = H_ref.current;
      const langEl = document.getElementById("language-section");
      const techEl = document.getElementById("tech");

      /* Past language section → fade out */
      if (techEl) {
        const tr = techEl.getBoundingClientRect();
        if (tr.top < H * 0.1) return { ...LANG[4], cxF: 0.74, cyF: 0.5, opacity: 0 };
      }

      if (!langEl) return { ...HERO, opacity: 1 };
      const lr = langEl.getBoundingClientRect();

      /* Above language section → hero state */
      if (lr.top >= H) return { ...HERO, opacity: 1 };

      /* Below language section (bottom has scrolled past top) */
      if (lr.bottom <= 0) return { ...LANG[4], opacity: 0 };

      /* Inside language section */
      const scrollable = lr.height - H;
      const scrolledIn = clamp(-lr.top, 0, scrollable);
      const progress   = scrolledIn / Math.max(1, scrollable);
      const idx        = Math.min(3, Math.floor(progress * 4));
      return { ...LANG[idx], opacity: 1 };
    };

    /* ── Draw loop ── */
    const LT  = 0.055;  // general lerp factor
    const LTS = 0.038;  // slow (size / zoom)
    const LTF = 0.10;   // fast (opacity)

    const draw = () => {
      frame++;
      // Refresh color cache every 60 frames instead of every frame
      if (frame % 60 === 0) colorCache = getC();
      const W = W_ref.current;
      const H = H_ref.current;
      const target = getTarget();
      const { fg, subtle, border, accent } = colorCache;

      /* Lerp everything */
      livCxF  = lerp(livCxF,  target.cxF,  LT);
      livCyF  = lerp(livCyF,  target.cyF,  LT);
      livRF   = lerp(livRF,   target.rF,   LTS);
      livZoom = lerp(livZoom, target.zoom,  LTS);
      livOpa  = lerp(livOpa,  target.opacity, LTF);

      if (target.auto) {
        autoAngle   += 0.05;
        livRot[0] = lerpAngle(livRot[0], autoAngle, LT);
        livRot[1] = lerp(livRot[1], target.rot[1], LT);
      } else {
        livRot[0] = lerpAngle(livRot[0], target.rot[0], LT);
        livRot[1] = lerp(livRot[1], target.rot[1], LT);
        autoAngle = livRot[0];
      }

      /* Derived geometry */
      const cx = W * livCxF;
      const cy = H * livCyF;
      const R  = H * livRF * livZoom;

      projection.translate([cx, cy]).scale(R).rotate([livRot[0], livRot[1]]);

      ctx.clearRect(0, 0, W, H);
      if (livOpa < 0.01) { animId = requestAnimationFrame(draw); return; }

      ctx.globalAlpha = livOpa;

      /* Is the full globe circle contained within the canvas? */
      const globeFits = (cx - R > -20) && (cx + R < W + 20) &&
                        (cy - R > -20) && (cy + R < H + 20);

      /* Globe ring (when full circle visible) */
      if (globeFits) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, R, 0, Math.PI * 2);
        ctx.strokeStyle = border;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      /* Clip region */
      ctx.save();
      ctx.beginPath();
      if (globeFits) {
        ctx.arc(cx, cy, R, 0, Math.PI * 2);
      } else {
        ctx.rect(0, 0, W, H);
      }
      ctx.clip();

      if (landData) {
        /* Graticule */
        const step = globeFits ? 20 : 5;
        const grat = d3.geoGraticule().step([step, step])();
        ctx.beginPath();
        pathGen(grat);
        ctx.strokeStyle = accent;
        ctx.lineWidth   = globeFits ? 0.45 : 0.3;
        ctx.globalAlpha = livOpa * (globeFits ? 0.22 : 0.16);
        ctx.stroke();
        ctx.globalAlpha = livOpa;

        /* Land fill */
        ctx.beginPath();
        landData.features.forEach((f: any) => pathGen(f));
        ctx.fillStyle   = fg;
        ctx.globalAlpha = livOpa * 0.05;
        ctx.fill();
        ctx.globalAlpha = livOpa;

        /* Land outline */
        ctx.beginPath();
        landData.features.forEach((f: any) => pathGen(f));
        ctx.strokeStyle = fg;
        ctx.lineWidth   = globeFits ? 0.85 : 0.65;
        ctx.globalAlpha = livOpa * (globeFits ? 0.55 : 0.5);
        ctx.stroke();
        ctx.globalAlpha = livOpa;
      }

      ctx.restore();

      /* Arc lines — visible only when in hero phase (globe near bottom) */
      const arcOpacity = clamp((livCyF - 0.65) / 0.35, 0, 1); // 0 at cy=0.65, 1 at cy=1.0
      if (arcOpacity > 0.01) {
        if (Math.random() < 0.015 && arcs.length < MAX_ARCS) arcs.push(mkArc());

        const toRemove: number[] = [];
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, W, H);
        ctx.clip();

        arcs.forEach((arc, i) => {
          const interp = d3.geoInterpolate(arc.src, arc.tgt);
          const steps = 60;
          const drawn = Math.floor(arc.progress * steps);
          if (drawn < 2) { arc.progress += arc.speed; return; }

          if (arc.phase === "draw") {
            arc.fade = Math.min(1, arc.fade + 0.05);
            arc.progress += arc.speed;
            if (arc.progress >= 1) { arc.phase = "hold"; arc.holdTick = 0; }
          } else if (arc.phase === "hold") {
            if (++arc.holdTick > 70) arc.phase = "erase";
          } else {
            arc.fade -= 0.025;
            arc.progress -= arc.speed * 0.7;
            if (arc.fade <= 0) { toRemove.push(i); return; }
          }

          ctx.beginPath();
          for (let s = 0; s <= drawn; s++) {
            const pt = projection(interp(s / steps));
            if (!pt) continue;
            s === 0 ? ctx.moveTo(pt[0], pt[1]) : ctx.lineTo(pt[0], pt[1]);
          }
          ctx.strokeStyle = fg;
          ctx.lineWidth   = 1.0;
          ctx.globalAlpha = livOpa * arcOpacity * arc.fade * 0.6;
          ctx.setLineDash([4, 6]);
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.globalAlpha = livOpa;

          const tipPt = projection(interp(Math.min(1, arc.progress)));
          if (tipPt) {
            ctx.beginPath();
            ctx.arc(tipPt[0], tipPt[1], 2.2, 0, Math.PI * 2);
            ctx.fillStyle   = fg;
            ctx.globalAlpha = livOpa * arcOpacity * arc.fade;
            ctx.fill();
            ctx.globalAlpha = livOpa;
          }
        });

        toRemove.sort((a, b) => b - a).forEach(i => arcs.splice(i, 1));
        ctx.restore();
      }

      /* Marker pin (language phase) */
      if (target.marker && !target.auto) {
        const pt = projection(target.marker);
        if (pt) {
          const [mx, my] = pt;
          const pulse = (frame % 80) / 80;

          ctx.save();
          /* Outer ring */
          ctx.beginPath();
          ctx.arc(mx, my, 6 + pulse * 24, 0, Math.PI * 2);
          ctx.strokeStyle = accent;
          ctx.lineWidth   = 1.5;
          ctx.globalAlpha = livOpa * (1 - pulse) * 0.6;
          ctx.stroke();
          /* Mid ring */
          ctx.beginPath();
          ctx.arc(mx, my, 5 + pulse * 12, 0, Math.PI * 2);
          ctx.strokeStyle = accent;
          ctx.lineWidth   = 1;
          ctx.globalAlpha = livOpa * (1 - pulse) * 0.3;
          ctx.stroke();
          /* Core dot */
          ctx.beginPath();
          ctx.arc(mx, my, 4.5, 0, Math.PI * 2);
          ctx.fillStyle  = accent;
          ctx.shadowColor = accent;
          ctx.shadowBlur  = 10;
          ctx.globalAlpha = livOpa;
          ctx.fill();
          
          /* Dialog box */
          if (target.name) {
            ctx.beginPath();
            ctx.moveTo(mx + 6, my - 6);
            ctx.lineTo(mx + 25, my - 25);
            ctx.lineTo(mx + 35, my - 25);
            ctx.strokeStyle = accent;
            ctx.lineWidth = 1;
            ctx.shadowBlur = 0;
            ctx.stroke();

            ctx.font = "600 12px 'Space Grotesk', sans-serif";
            const tw = ctx.measureText(target.name).width;
            
            ctx.shadowColor = "rgba(0,0,0,0.08)";
            ctx.shadowBlur = 12;
            ctx.shadowOffsetY = 4;
            ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
            ctx.fillRect(mx + 35, my - 39, tw + 20, 28);
            
            ctx.shadowBlur = 0;
            ctx.shadowOffsetY = 0;
            ctx.strokeStyle = accent;
            ctx.strokeRect(mx + 35, my - 39, tw + 20, 28);

            ctx.fillStyle = accent;
            ctx.fillText(target.name, mx + 45, my - 20);
          }
          
          ctx.restore();
        }
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };

    /* Bootstrap — fetch GeoJSON from /public (Vercel CDN, cached) */
    fetch("/data/ne_110m_land.json")
      .then(r => r.json())
      .then(data => { landData = data; draw(); })
      .catch(() => draw());

    /* Page Visibility — pause RAF when tab is hidden */
    const onVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) animId = requestAnimationFrame(draw);
      else cancelAnimationFrame(animId);
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
