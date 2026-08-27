"use client";

import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import styles from "./WavyBackground.module.css";

interface WavyBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast" | number;
  waveOpacity?: number;
  [key: string]: any;
}

export const WavyBackground = ({
  children,
  className = "",
  containerClassName = "",
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "slow",
  waveOpacity = 0.3,
  ...props
}: WavyBackgroundProps) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: any,
    canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getSpeed = () => {
    if (typeof speed === "number") return speed * 0.005; // Scale user numeric speed
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    canvas = canvasRef.current;
    if (!canvas) return;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    
    window.addEventListener("resize", handleResize);
    render();
  };

  const handleResize = () => {
    if (!ctx || !canvas) return;
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
  };

  // Subtle, theme-matching colors (cyan and deep purple variants)
  const waveColors = colors ?? [
    "#06b6d4",
    "#F47C36",
    "#3b82f6",
    "#FF9A5A",
    "#0ea5e9",
  ];
  
  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth ?? 8;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 2) {
        const amplitude = 28;
        var y = noise(x / 900, i * 0.25, nt) * amplitude;
        ctx.lineTo(x, y + h * 0.72); // Keep waves near the bottom
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  const render = () => {
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = "screen";
    ctx.globalAlpha = waveOpacity || 0.025;
    drawWave(10);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div className={`${styles.container} ${containerClassName}`}>
      <canvas
        className={styles.canvas}
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={`${styles.content} ${className}`} {...props}>
        {children}
      </div>
    </div>
  );
};
