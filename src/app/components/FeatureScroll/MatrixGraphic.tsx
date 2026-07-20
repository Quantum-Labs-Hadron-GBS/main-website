/* eslint-disable */
"use client";

import { useEffect, useRef } from "react";
import styles from "../FeatureScroll/FeatureScrollSection.module.css";

interface MatrixGraphicProps {
  activeIndex: number;
}

export default function MatrixGraphic({ activeIndex }: MatrixGraphicProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const gridSize = 25; // 25x25 grid
    
    // Store animated state for each dot
    const dots: { x: number, y: number, targetAlpha: number, currentAlpha: number, randSpeed: number }[] = [];
    
    const initDots = () => {
      dots.length = 0;
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          // Normalize coordinates from -1 to 1
          const nx = (j / (gridSize - 1)) * 2 - 1;
          const ny = 1 - (i / (gridSize - 1)) * 2; // Flip Y so 1 is top, -1 is bottom
          dots.push({
            x: nx,
            y: ny,
            targetAlpha: 0.1,
            currentAlpha: Math.random() * 0.1,
            randSpeed: 0.05 + Math.random() * 0.1
          });
        }
      }
    };

    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    // Shape functions
    // 0: Salesforce (Cloud)
    const isCloud = (x: number, y: number) => {
      const c1 = (x * x + (y - 0.1) * (y - 0.1) < 0.15); // center
      const c2 = ((x - 0.3) * (x - 0.3) + (y + 0.1) * (y + 0.1) < 0.1); // right
      const c3 = ((x + 0.3) * (x + 0.3) + (y + 0.1) * (y + 0.1) < 0.08); // left
      const base = (y > -0.2 && y < 0.1 && x > -0.3 && x < 0.3); // flat base
      return c1 || c2 || c3 || base;
    };

    // 1: DevOps (Infinity Loop)
    const isInfinity = (x: number, y: number) => {
      // (x^2 + y^2)^2 = a^2 (x^2 - y^2)
      const a = 0.7;
      const x2 = x * x;
      const y2 = y * y;
      const left = Math.pow(x2 + y2, 2);
      const right = a * a * (x2 - y2);
      return Math.abs(left - right) < 0.05 && x2 + y2 < 0.8;
    };

    // 2: ITSM (Shield/Gear)
    const isShield = (x: number, y: number) => {
      const top = y < 0.4 && y > -0.5;
      const sides = Math.abs(x) < 0.4;
      const bottom = y < 0 ? Math.abs(x) < 0.4 + y * 0.8 : true;
      const hollow = Math.abs(x) < 0.25 && y < 0.25 && (y > 0 ? true : Math.abs(x) < 0.25 + y * 0.8);
      
      // Outline of a shield
      return top && sides && bottom && !hollow;
    };

    // 3: ITOM (Pulse)
    const isPulse = (x: number, y: number) => {
      let targetY = 0;
      if (x > -0.3 && x < -0.1) targetY = (x + 0.3) * 5; // Up
      else if (x >= -0.1 && x < 0.1) targetY = 1 - (x + 0.1) * 10; // Down
      else if (x >= 0.1 && x < 0.3) targetY = -1 + (x - 0.1) * 5; // Up to 0
      
      // Scale down targetY slightly
      targetY *= 0.6;
      
      return Math.abs(y - targetY) < 0.1 && Math.abs(x) < 0.7;
    };

    // 4: RPA (Robot Face)
    const isRobot = (x: number, y: number) => {
      const headBorder = Math.abs(x) < 0.5 && Math.abs(y) < 0.4 && !(Math.abs(x) < 0.4 && Math.abs(y) < 0.3);
      const eyeL = Math.abs(x + 0.2) < 0.1 && Math.abs(y - 0.1) < 0.05;
      const eyeR = Math.abs(x - 0.2) < 0.1 && Math.abs(y - 0.1) < 0.05;
      const mouth = Math.abs(x) < 0.2 && Math.abs(y + 0.15) < 0.05;
      const antenna = Math.abs(x) < 0.05 && y > 0.4 && y < 0.6;
      const antennaBall = x * x + (y - 0.6) * (y - 0.6) < 0.01;
      
      return headBorder || eyeL || eyeR || mouth || antenna || antennaBall;
    };

    const shapeCheckers = [isCloud, isInfinity, isShield, isPulse, isRobot];

    const getAccentColor = () => {
      return getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#E8A020";
    };

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      const accent = getAccentColor();
      const checker = shapeCheckers[activeIndex] || isCloud;

      const cellW = width / gridSize;
      const cellH = height / gridSize;

      // Update target alphas based on active shape
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const inside = checker(dot.x, dot.y);
        
        dot.targetAlpha = inside ? 1.0 : 0.1;
        
        // Lerp alpha
        dot.currentAlpha += (dot.targetAlpha - dot.currentAlpha) * dot.randSpeed;

        // Draw dot
        const px = (dot.x + 1) / 2 * width;
        const py = (1 - dot.y) / 2 * height;
        
        // Add subtle breathing effect to active dots
        const breathe = inside ? Math.sin(Date.now() * 0.003 + dot.x * 10) * 0.2 : 0;
        const finalAlpha = Math.max(0.05, Math.min(1, dot.currentAlpha + breathe));
        
        ctx.beginPath();
        // Active dots are slightly larger
        const radius = inside ? (2.5 + breathe) : 1.5;
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        
        ctx.fillStyle = accent;
        ctx.globalAlpha = finalAlpha;
        ctx.fill();
        
        // Glow for highly active dots
        if (finalAlpha > 0.6) {
          ctx.shadowColor = accent;
          ctx.shadowBlur = 10;
        } else {
          ctx.shadowBlur = 0;
        }
      }

      ctx.globalAlpha = 1.0;
      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    initDots();
    resize();
    window.addEventListener("resize", resize);
    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeIndex]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        pointerEvents: 'none'
      }} 
    />
  );
}
