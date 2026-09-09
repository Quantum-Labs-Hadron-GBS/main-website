"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import styles from "./InteractiveCanvasSection.module.css";

// SVG Icons
const PenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
);

const EraserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>
);

const ResetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
);

const COLORS = [
  "#0f172a", // Dark Slate
  "#1A73E8", // Corporate Blue
  "#F47C36", // Hadron Orange
  "#10b981", // Emerald Green
  "#ec4899", // Pink
];

const TABS = ["INDUSTRIES", "PLATFORMS", "EXCELLENCE"];

// Handwritten content for each tab
const TAB_CONTENT = [
  // Industries
  [
    { title: "Manufacturing", body: "We help manufacturing organizations leverage AI, automation, and IoT to optimize supply chains and increase production efficiency." },
    { title: "Financial Services", body: "Empowering financial institutions with secure, scalable cloud solutions and agentic AI to enhance customer experience and compliance." },
    { title: "Retail", body: "Transforming retail through unified commerce solutions, predictive analytics, and personalized customer journeys." },
    { title: "Government", body: "Modernizing public services with secure cloud infrastructure, digital workflows, and citizen-centric applications." },
    { title: "Education", body: "Enhancing educational experiences through digital transformation, secure learning platforms, and operational efficiency." }
  ],
  // Platforms
  [
    { title: "ServiceNow", body: "As a ServiceNow Partner, we are committed to empowering organizations with state-of-the-art technologies, spearheading digital transformation initiatives." },
    { title: "Salesforce", body: "Hadron partners with Salesforce, merging expertise to redefine global business solutions. Our collaboration unlocks innovation and drives growth." },
    { title: "SAP", body: "We deliver SAP solutions that streamline enterprise operations, from ERP migrations to intelligent enterprise architecture and core modernization." },
    { title: "Microsoft Cloud", body: "As a certified Microsoft Solutions Partner, Hadron GBS empowers enterprises to modernize their infrastructure and reinvent productivity." },
    { title: "AWS Cloud", body: "We accelerate your journey to AWS with secure, scalable cloud architecture and AI-powered data solutions." }
  ],
  // Excellence
  [
    { title: "EXPERIENCE", body: "Leading Business through expertise. We have a team of experienced and skilled professionals who have worked with a diverse range of clients across different industries." },
    { title: "QUALITY", body: "Delivering exceptional results. We understand that quality is as important as timeliness for any business. Our team ensures that the solutions meet your expectations." },
    { title: "VALUE", body: "Smart investment for your business. We offer cost-effective solutions that meet your budget requirements and provide customized solutions that are efficient." },
    { title: "APPROACH", body: "Solutions tailored to your unique needs. We take a personalized approach to every project and work closely with our clients to understand their specific needs." }
  ]
];

export default function InteractiveCanvasSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);
  
  // Drawing State
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState<"pencil" | "eraser">("pencil");
  const [strokeWidth, setStrokeWidth] = useState(4);
  const [color, setColor] = useState(COLORS[0]);

  const drawInitialContent = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas before writing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Reset composite operation to normal for drawing text
    ctx.globalCompositeOperation = "source-over";
    
    // Set up handwriting font
    const pixelRatio = window.devicePixelRatio || 1;
    const contentScale = (canvas.offsetWidth || 1300) / 1300; // Scale relative to original 1300px design
    const drawScale = pixelRatio * contentScale;
    
    ctx.fillStyle = "#0f172a"; // Dark pen color for notes
    ctx.textBaseline = "top";

    const items = TAB_CONTENT[activeTab];
    const BASE_WIDTH = 1300;
    const colWidth = BASE_WIDTH / 2; // Fixed logical grid size
    const maxTextWidth = (colWidth - 120) * drawScale; 
    
    const startX = 80; 
    const startY = 120; 
    const rowHeight = 280; 

    // Helper to wrap text
    const wrapText = (text: string, x: number, y: number, maxWidth: number, lineHeight: number) => {
      const words = text.split(' ');
      let line = '';
      let currentY = y;
      
      for(let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
          ctx.fillText(line, x, currentY);
          line = words[n] + ' ';
          currentY += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, x, currentY);
      return currentY;
    };

    items.forEach((item, index) => {
      let col, row, x, y;

      if (activeTab === 1) {
        // PARTNERS TAB: Render as tight vertical lists (3 items per column)
        col = Math.floor(index / 3); 
        row = index % 3;             
        
        x = (startX + (col * colWidth)) * drawScale;
        y = (startY + (row * 60)) * drawScale; 

        ctx.font = `bold ${32 * drawScale}px 'Caveat', cursive`; 
        ctx.fillText(item.title, x, y);
        
      } else {
        // EXPERTISE & EXCELLENCE TABS: Standard 2x2 or 3x2 grid with underlines
        col = index % 2; 
        row = Math.floor(index / 2); 
        
        x = (startX + (col * colWidth)) * drawScale;
        y = (startY + (row * rowHeight)) * drawScale;

        // Draw Title
        ctx.font = `bold ${27 * drawScale}px 'Caveat', cursive`;
        ctx.fillText(item.title, x, y);

        // Draw Underline
        const titleWidth = ctx.measureText(item.title).width;
        ctx.beginPath();
        ctx.moveTo(x, y + (28 * drawScale));
        ctx.lineTo(x + titleWidth, y + (28 * drawScale));
        ctx.lineWidth = 2 * drawScale;
        ctx.strokeStyle = "#0f172a";
        ctx.stroke();
        
        // Draw Body
        ctx.font = `${22 * drawScale}px 'Caveat', cursive`;
        wrapText(item.body, x, y + (48 * drawScale), maxTextWidth, 26 * drawScale);
      }
    });

    // Re-apply drawing tool settings immediately after rendering text
    ctx.lineWidth = strokeWidth * drawScale;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    if (tool === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = strokeWidth * drawScale * 3;
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = color;
    }
  }, [activeTab, tool, color, strokeWidth]);

  // Setup canvas and redraw content when tab switches
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resizeCanvas = () => {
      const { width, height } = container.getBoundingClientRect();
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      
      // Inject scale variable to resize the CSS background grid
      const contentScale = width / 1300;
      container.style.setProperty('--scale', `${contentScale}`);
      
      // Explicitly tell the browser to fetch and load the Caveat font
      // ctx.font usage doesn't always trigger network requests quickly!
      document.fonts.load("34px 'Caveat'").then(() => {
        drawInitialContent();
      });
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [activeTab, drawInitialContent]);

  // Re-apply drawing styles when tools change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pixelRatio = window.devicePixelRatio || 1;
    const contentScale = (canvas.offsetWidth || 1300) / 1300;
    const drawScale = pixelRatio * contentScale;

    ctx.lineWidth = strokeWidth * drawScale;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    
    if (tool === "eraser") {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = strokeWidth * drawScale * 4; // Make eraser bigger
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.strokeStyle = color;
    }
  }, [tool, color, strokeWidth]);

  // Drawing Handlers
  const startDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.setPointerCapture(e.pointerId);
    
    const rect = canvas.getBoundingClientRect();
    const scale = window.devicePixelRatio || 1;
    const x = (e.clientX - rect.left) * scale;
    const y = (e.clientY - rect.top) * scale;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scale = window.devicePixelRatio || 1;
    const x = (e.clientX - rect.left) * scale;
    const y = (e.clientY - rect.top) * scale;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.releasePointerCapture(e.pointerId);
    }
    setIsDrawing(false);
  };

  const handleReset = () => {
    drawInitialContent();
  };

  const getCursor = () => {
    if (tool === "pencil") {
      const hex = color.replace("#", "%23");
      return `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${hex}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>') 0 24, crosshair`;
    } else {
      return `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/></svg>') 0 24, cell`;
    }
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        <div className={styles.notepadContainer} ref={containerRef}>
          
          {/* Visually hidden text to force the browser to preload the Caveat font immediately */}
          <span style={{ fontFamily: "'Caveat', cursive", position: "absolute", opacity: 0, pointerEvents: "none" }}>Preload</span>

          {/* Header Tabs (iOS 18 Liquid Glass Pill) */}
          <div className={styles.tabsContainer} onMouseLeave={() => setHoveredTab(null)}>
            {TABS.map((tab, idx) => {
              const isActive = activeTab === idx;
              const isHovered = hoveredTab === idx;
              const hasPill = hoveredTab !== null ? isHovered : isActive;

              return (
                <button
                  key={tab}
                  className={`${styles.tabButton} ${isActive ? styles.tabButtonActive : ""}`}
                  onClick={() => setActiveTab(idx)}
                  onMouseEnter={() => setHoveredTab(idx)}
                  style={{ position: 'relative' }}
                >
                  {hasPill && (
                    <motion.div
                      layoutId="canvasTabPill"
                      className={styles.activePill}
                      transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.8 }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 1 }}>{tab}</span>
                </button>
              );
            })}
          </div>

          {/* Full Width/Height Canvas Layer */}
          <div className={styles.canvasWrapper}>
            <canvas
              ref={canvasRef}
              className={styles.canvas}
              style={{ cursor: getCursor(), touchAction: "none" }}
              onPointerDown={startDrawing}
              onPointerMove={draw}
              onPointerUp={stopDrawing}
              onPointerCancel={stopDrawing}
            />
          </div>

          {/* Floating Toolbar */}
          <div className={styles.toolbar}>
            <div className={styles.toolGroup}>
              <button 
                className={`${styles.toolButton} ${tool === "pencil" ? styles.active : ""}`}
                onClick={() => setTool("pencil")}
                title="Pencil"
              >
                <PenIcon />
              </button>
              <button 
                className={`${styles.toolButton} ${tool === "eraser" ? styles.active : ""}`}
                onClick={() => setTool("eraser")}
                title="Eraser"
              >
                <EraserIcon />
              </button>
            </div>

            <div className={styles.divider} />

            {/* Stroke Width Controls */}
            <div className={styles.toolGroup}>
              <button 
                className={styles.toolButton}
                onClick={() => setStrokeWidth(Math.max(2, strokeWidth - 2))}
                title="Thinner"
                style={{ width: '32px', height: '32px' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/></svg>
              </button>
              <span style={{ fontSize: '12px', fontWeight: 'bold', width: '20px', textAlign: 'center', color: '#0f172a' }}>{strokeWidth}</span>
              <button 
                className={styles.toolButton}
                onClick={() => setStrokeWidth(Math.min(24, strokeWidth + 2))}
                title="Thicker"
                style={{ width: '32px', height: '32px' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
              </button>
            </div>

            <div className={styles.divider} />

            {/* Color Picker */}
            <div className={styles.colorPickerWrapper}>
              {COLORS.map(c => (
                <button
                  key={c}
                  className={`${styles.colorBtn} ${color === c && tool === "pencil" ? styles.activeColor : ""}`}
                  style={{ backgroundColor: c }}
                  onClick={() => {
                    setColor(c);
                    setTool("pencil");
                  }}
                  title={c}
                />
              ))}
            </div>

            <div className={styles.divider} />

            {/* Actions */}
            <button className={styles.actionButton} onClick={handleReset} title="Reset Canvas">
              <ResetIcon />
              Reset
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
