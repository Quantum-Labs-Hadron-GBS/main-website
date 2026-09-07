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
      <div className={styles.menuBar}>
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
