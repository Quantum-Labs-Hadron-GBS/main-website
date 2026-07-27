"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

// Major world cities as [lng, lat] for arc line endpoints
const CITIES: [number, number][] = [
  [-74.006, 40.7128],   // New York
  [-0.1276, 51.5074],   // London
  [2.3522, 48.8566],    // Paris
  [139.6917, 35.6895],  // Tokyo
  [103.8198, 1.3521],   // Singapore
  [151.2093, -33.8688], // Sydney
  [28.9784, 41.0082],   // Istanbul
  [-43.1729, -22.9068], // Rio
  [37.6173, 55.7558],   // Moscow
  [55.2708, 25.2048],   // Dubai
  [18.4241, -33.9249],  // Cape Town
  [77.1025, 28.7041],   // Delhi
  [-99.1332, 19.4326],  // Mexico City
  [144.9631, -37.8136], // Melbourne
  [-46.6333, -23.5505], // São Paulo
];

interface Arc {
  source: [number, number];
  target: [number, number];
  progress: number;      // 0..1 draw progress
  fade: number;          // 0..1 opacity
  speed: number;
  phase: "draw" | "hold" | "erase";
  holdTick: number;
  color: string;
}

function randomPair(): [[number, number], [number, number]] {
  const idx1 = Math.floor(Math.random() * CITIES.length);
  let idx2 = Math.floor(Math.random() * CITIES.length);
  while (idx2 === idx1) idx2 = Math.floor(Math.random() * CITIES.length);
  return [CITIES[idx1], CITIES[idx2]];
}

function createArc(fg: string): Arc {
  const [s, t] = randomPair();
  return {
    source: s,
    target: t,
    progress: 0,
    fade: 0,
    speed: 0.004 + Math.random() * 0.006,
    phase: "draw",
    holdTick: 0,
    color: fg,
  };
}

export default function PlanetHorizon() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // --- Sizing ---
    const W = canvas.offsetWidth || 900;
    const H = canvas.offsetHeight || 620;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const cx = W / 2;
    // Globe centre sits exactly at the bottom edge of the canvas.
    // Radius = 92% of canvas height → the full upper hemisphere (north-pole
    // tip at top, equator horizon at the bottom edge) is visible.
    const R = H * 0.92;
    const cy = H;          // centre at canvas bottom → shows top half of sphere

    // --- D3 Orthographic ---
    // Start rotation centred on Indian Ocean (India ~77°E, Middle East ~45°E)
    // → use -60 as the initial lambda (D3 rotates the opposite sign)
    const projection = d3
      .geoOrthographic()
      .scale(R)
      .translate([cx, cy])
      .clipAngle(90)
      .rotate([-60, -20]);

    const pathGen = d3.geoPath().projection(projection).context(ctx);

    // --- Theme colors from CSS variables ---
    const getColors = () => {
      const 
      return {
        bg: style.getPropertyValue("--bg").trim() || "#000",
        fg: style.getPropertyValue("--fg").trim() || "#fff",
        subtle: style.getPropertyValue("--fg-subtle").trim() || "#666",
        border: style.getPropertyValue("--border-strong").trim() || "rgba(255,255,255,0.25)",
      };
    };

    // --- Land data ---
    let landFeatures: d3.ExtendedFeatureCollection | null = null;

    const fetchLand = async () => {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json"
        );
        landFeatures = await res.json();
      } catch {
        // silently fail — globe still renders ocean
      }
    };

    // --- Arc state ---
    const MAX_ARCS = 5;
    const arcs: Arc[] = [];

    const spawnArc = (fg: string) => {
      if (arcs.length < MAX_ARCS) arcs.push(createArc(fg));
    };

    // --- Rotation ---
    // Start at -60 (India/Middle East facing forward)
    let rotationAngle = -60;
    let animId: number;

    const draw = () => {
      const { fg, subtle, border } = getColors();

      // Slowly auto-rotate (eastward drift)
      rotationAngle += 0.05;
      projection.rotate([rotationAngle, -20]);

      // Clear
      ctx.clearRect(0, 0, W, H);

      // --- Ocean fill: subtle tinted circle (matches theme) ---
      ctx.save();
      ctx.beginPath();
      // Only draw the visible arc (upper half since cy = H)
      ctx.arc(cx, cy, R, Math.PI, 0); // top semicircle
      ctx.closePath();
      ctx.fillStyle = fg === "#ffffff" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.08)";
      ctx.fill();
      ctx.restore();

      // --- Horizon arc border (the equator rim at canvas bottom) ---
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, Math.PI, 0); // top semicircle arc
      ctx.strokeStyle = border;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // --- Graticule (grid lines) clipped to upper half ---
      if (landFeatures) {
        ctx.save();
        // clip to the visible part (only top of globe)
        ctx.beginPath();
        ctx.rect(0, 0, W, H);
        ctx.clip();

        const graticule = d3.geoGraticule().step([20, 20])();
        ctx.beginPath();
        pathGen(graticule);
        ctx.strokeStyle = subtle;
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = 0.3;
        ctx.stroke();
        ctx.globalAlpha = 1;

        // --- Land outlines ---
        ctx.beginPath();
        (landFeatures as d3.ExtendedFeatureCollection).features.forEach((f) =>
          pathGen(f as d3.ExtendedFeature)
        );
        ctx.strokeStyle = fg;
        ctx.lineWidth = 0.8;
        ctx.globalAlpha = 0.55;
        ctx.stroke();
        ctx.restore();
      }

      // --- Arc Lines ---
      // Spawn new arc occasionally
      if (Math.random() < 0.012) spawnArc(fg);

      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, W, H);
      ctx.clip();

      const toRemove: number[] = [];

      arcs.forEach((arc, i) => {
        const interp = d3.geoInterpolate(arc.source, arc.target);

        // Build current partial path
        const steps = 60;
        const drawSteps = Math.floor(arc.progress * steps);
        if (drawSteps < 2) {
          arc.progress += arc.speed;
          return;
        }

        // Fade in/out
        if (arc.phase === "draw") {
          arc.fade = Math.min(1, arc.fade + 0.05);
          arc.progress += arc.speed;
          if (arc.progress >= 1) {
            arc.phase = "hold";
            arc.holdTick = 0;
          }
        } else if (arc.phase === "hold") {
          arc.holdTick++;
          if (arc.holdTick > 80) arc.phase = "erase";
        } else {
          arc.fade -= 0.03;
          arc.progress -= arc.speed * 0.7;
          if (arc.fade <= 0) toRemove.push(i);
        }

        // Draw arc as dashed line
        ctx.beginPath();
        for (let s = 0; s <= drawSteps; s++) {
          const t = s / steps;
          const [lng, lat] = interp(t);
          const pt = projection([lng, lat]);
          if (!pt) continue;
          if (s === 0) ctx.moveTo(pt[0], pt[1]);
          else ctx.lineTo(pt[0], pt[1]);
        }

        ctx.strokeStyle = arc.color;
        ctx.lineWidth = 1.2;
        ctx.globalAlpha = arc.fade * 0.8;
        ctx.setLineDash([4, 5]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw endpoint dot at current tip
        const tipT = arc.phase === "erase"
          ? Math.max(0, arc.progress)
          : arc.progress;
        const tipPt = projection(interp(Math.min(1, tipT)));
        if (tipPt) {
          ctx.beginPath();
          ctx.arc(tipPt[0], tipPt[1], 2.5, 0, Math.PI * 2);
          ctx.fillStyle = arc.color;
          ctx.globalAlpha = arc.fade;
          ctx.fill();
        }
      });
      ctx.restore();

      // Remove dead arcs (reverse order)
      toRemove.sort((a, b) => b - a).forEach((i) => arcs.splice(i, 1));

      animId = requestAnimationFrame(draw);
    };

    // Bootstrap: fetch land then start loop
    fetchLand().then(() => {
      // Pre-spawn some arcs
      const { fg } = getColors();
      for (let i = 0; i < 3; i++) arcs.push(createArc(fg));
      draw();
    });

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      {/* Horizon gradient fade at canvas bottom */}
      <div className={styles.horizonFade} />
    </div>
  );
}
