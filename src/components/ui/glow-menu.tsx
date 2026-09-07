"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./glow-menu.module.css";

export interface SubMenuItem {
  label: string;
  href: string;
  nestedItems?: { label: string; href: string }[];
}

export interface MenuItem {
  label: string;
  href: string;
  gradient: string;
  subItems?: SubMenuItem[];
  isLogo?: boolean;
  logoSrc?: string;
  textColor?: string;
}

interface MenuBarProps {
  items: MenuItem[];
  activeItem: string;
  onItemClick: (label: string) => void;
  isLightMode?: boolean;
}

export function MenuBar({ items, activeItem, onItemClick, isLightMode = false }: MenuBarProps) {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [hoveredSubItem, setHoveredSubItem] = useState<string | null>(null);

  return (
    <div className={`${styles.menuBarContainer} ${isLightMode ? styles.lightMode : ""}`}>
      {/* SVG Gooey Filter for Meiosis Effect */}
      <svg width="0" height="0" style={{ position: "absolute", pointerEvents: "none" }}>
        <defs>
          <filter id="goo-nav">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className={styles.menuBar} onMouseLeave={() => setHoveredMenu(null)}>
        
        {/* Background Gooey Layer for Liquid Pill */}
        <div className={styles.gooeyLayer}>
          {items.map((item) => {
            const isActive = activeItem === item.label;
            const isHovered = hoveredMenu === item.label;
            const hasPill = (hoveredMenu !== null ? isHovered : isActive) && !item.isLogo;

            return (
              <div key={`bg-${item.label}`} className={`${styles.menuItemWrapper} ${item.isLogo ? styles.isLogo : ""}`} style={{ pointerEvents: 'none' }}>
                <div className={styles.menuItem} style={{ visibility: 'hidden', padding: item.isLogo ? '0.5rem 0' : undefined }}>
                  {item.isLogo && item.logoSrc ? (
                    <img src={item.logoSrc} alt="hidden-logo" style={{ height: '20px', width: 'auto', display: 'block' }} />
                  ) : (
                    <span className={styles.label}>{item.label}</span>
                  )}
                </div>
                {hasPill && (
                  <motion.div
                    layoutId="magic-pill-nav"
                    className={styles.gooeyPill}
                    transition={{ type: "spring", stiffness: 400, damping: 25, mass: 1 }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {items.map((item) => {
          const isActive = activeItem === item.label;
          const isHovered = hoveredMenu === item.label;
          const hasSubItems = item.subItems && item.subItems.length > 0;

          return (
            <div 
              key={item.label} 
              className={`${styles.menuItemWrapper} ${item.isLogo ? styles.isLogo : ""}`}
              onMouseEnter={() => setHoveredMenu(item.label)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link
                href={item.href}
                className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
                onClick={() => onItemClick(item.label)}
                style={{ position: 'relative', zIndex: 1 }}
              >
                {/* Content: Either Logo or Label */}
                {item.isLogo && item.logoSrc ? (
                  <img 
                    src={item.logoSrc} 
                    alt={item.label} 
                    style={{ height: '20px', width: 'auto', display: 'block', opacity: isActive ? 1 : 0.8 }} 
                  />
                ) : (
                  <span 
                    className={styles.label} 
                    style={{ 
                      opacity: 1,
                      color: item.textColor || undefined,
                      fontWeight: item.textColor ? 'bold' : undefined
                    }}
                  >
                    {item.label}
                  </span>
                )}
              </Link>

              {/* Dropdown Menu */}
              {hasSubItems && (
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95, x: "-50%" }}
                      animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                      exit={{ opacity: 0, y: 10, scale: 0.95, x: "-50%" }}
                      transition={{ duration: 0.2 }}
                      className={styles.dropdownMenu}
                    >
                      {item.subItems!.map((sub) => (
                        <div 
                          key={sub.label}
                          className={styles.dropdownItemWrapper}
                          onMouseEnter={() => setHoveredSubItem(sub.label)}
                          onMouseLeave={() => setHoveredSubItem(null)}
                        >
                          <Link 
                            href={sub.href} 
                            className={styles.dropdownItem}
                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                            onClick={() => {
                              setHoveredMenu(null);
                              setHoveredSubItem(null);
                              onItemClick(item.label);
                            }}
                          >
                            <span>{sub.label}</span>
                            {sub.nestedItems && (
                              <span style={{ color: hoveredSubItem === sub.label ? '#F47C36' : 'inherit' }}>
                                &gt;
                              </span>
                            )}
                          </Link>

                          {sub.nestedItems && hoveredSubItem === sub.label && (
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              transition={{ duration: 0.2 }}
                              className={styles.nestedDropdownMenu}
                            >
                              {sub.nestedItems.map(nested => (
                                <Link
                                  key={nested.label}
                                  href={nested.href}
                                  className={styles.dropdownItem}
                                  onClick={() => {
                                    setHoveredMenu(null);
                                    setHoveredSubItem(null);
                                    onItemClick(item.label);
                                  }}
                                >
                                  {nested.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
