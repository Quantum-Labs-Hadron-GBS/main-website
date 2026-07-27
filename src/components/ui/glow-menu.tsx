"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./glow-menu.module.css";

export interface MenuItem {
  label: string;
  href: string;
  gradient: string;
  subItems?: { label: string; href: string }[];
  isLogo?: boolean;
  logoSrc?: string;
}

interface MenuBarProps {
  items: MenuItem[];
  activeItem: string;
  onItemClick: (label: string) => void;
}

export function MenuBar({ items, activeItem, onItemClick }: MenuBarProps) {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  return (
    <div className={styles.menuBarContainer}>
      <div className={styles.menuBar}>
        {items.map((item) => {
          const isActive = activeItem === item.label;
          const isHovered = hoveredMenu === item.label;
          const hasSubItems = item.subItems && item.subItems.length > 0;

          return (
            <div 
              key={item.label} 
              className={styles.menuItemWrapper}
              onMouseEnter={() => setHoveredMenu(item.label)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link
                href={item.href}
                className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
                onClick={() => onItemClick(item.label)}
              >
                {/* Active Background Glow */}
                {isActive && (
                  <motion.div
                    layoutId="glow-menu-active"
                    className={styles.activeBackground}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    style={{ background: item.gradient }}
                  />
                )}

                {/* Content: Either Logo or Label */}
                {item.isLogo && item.logoSrc ? (
                  <img 
                    src={item.logoSrc} 
                    alt={item.label} 
                    style={{ height: '20px', width: 'auto', display: 'block', opacity: isActive ? 1 : 0.8 }} 
                  />
                ) : (
                  <span className={styles.label} style={{ opacity: isActive ? 1 : 0.7 }}>
                    {item.label}
                  </span>
                )}
              </Link>

              {/* Dropdown Menu */}
              {hasSubItems && (
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className={styles.dropdownMenu}
                    >
                      {item.subItems!.map((sub) => (
                        <Link 
                          key={sub.label} 
                          href={sub.href} 
                          className={styles.dropdownItem}
                          onClick={() => {
                            setHoveredMenu(null);
                            onItemClick(item.label);
                          }}
                        >
                          {sub.label}
                        </Link>
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
