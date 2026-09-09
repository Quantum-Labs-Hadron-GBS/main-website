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

export type MenuGroup = {
  title: string;
  items: SubMenuItem[];
};

export type FeaturedPanel = {
  eyebrow?: string;
  title: string;
  description: string;
  cta: string;
  href: string;
};

export interface MenuItem {
  label: string;
  href: string;
  gradient: string;
  subItems?: SubMenuItem[];
  groups?: MenuGroup[];
  featured?: FeaturedPanel;
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
      <div className={styles.menuBar} onMouseLeave={() => setHoveredMenu(null)}>
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
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {/* iOS 18 Liquid Glass Pill */}
                {((hoveredMenu !== null ? isHovered : isActive) && !item.isLogo) && (
                  <motion.div
                    layoutId="magic-pill"
                    className={styles.activeBackground}
                    transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.8 }}
                  />
                )}

                {/* Content: Either Logo or Label */}
                {item.isLogo && item.logoSrc ? (
                  <img 
                    src={item.logoSrc} 
                    alt={item.label} 
                    style={{ 
                      height: '20px', 
                      width: 'auto', 
                      display: 'block', 
                      opacity: isActive ? 1 : 0.8,
                      filter: isLightMode && item.logoSrc.includes('white') ? 'brightness(0)' : 'none'
                    }} 
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
              {(hasSubItems || item.groups) && (
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95, x: item.label === "AI & Automation" ? "-15%" : item.label === "Platforms" ? "-75%" : item.label === "More" ? "-85%" : "-50%" }}
                      animate={{ opacity: 1, y: 0, scale: 1, x: item.label === "AI & Automation" ? "-15%" : item.label === "Platforms" ? "-75%" : item.label === "More" ? "-85%" : "-50%" }}
                      exit={{ opacity: 0, y: 10, scale: 0.95, x: item.label === "AI & Automation" ? "-15%" : item.label === "Platforms" ? "-75%" : item.label === "More" ? "-85%" : "-50%" }}
                      transition={{ duration: 0.2 }}
                      className={item.groups ? styles.dropdownMenuMega : styles.dropdownMenu}
                    >
                      {/* Standard Flat List (Fallback) */}
                      {!item.groups && item.subItems && item.subItems.map((sub) => (
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
                            target={sub.href.startsWith("http") ? "_blank" : undefined}
                            rel={sub.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
                                  target={nested.href.startsWith("http") ? "_blank" : undefined}
                                  rel={nested.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                >
                                  {nested.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      ))}

                      {/* Mega Menu Layout */}
                      {item.groups && (
                        <div className={styles.megaMenuInner}>
                          <div className={styles.megaGroups}>
                            {item.groups.map((group, idx) => (
                              <div key={idx} className={styles.megaGroup}>
                                <h4 className={styles.megaGroupTitle}>{group.title}</h4>
                                <div className={styles.megaGroupItems}>
                                  {group.items.map((sub) => (
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
                                </div>
                              </div>
                            ))}
                          </div>
                          {item.featured && (
                            <div className={styles.megaFeatured}>
                              <div className={styles.megaFeaturedInner}>
                                {item.featured.eyebrow && (
                                  <span className={styles.featuredEyebrow}>{item.featured.eyebrow}</span>
                                )}
                                <h4 className={styles.featuredTitle}>{item.featured.title}</h4>
                                <p className={styles.featuredDesc}>{item.featured.description}</p>
                                <Link
                                  href={item.featured.href}
                                  className={styles.featuredCta}
                                  onClick={() => {
                                    setHoveredMenu(null);
                                    onItemClick(item.label);
                                  }}
                                >
                                  {item.featured.cta} <span>→</span>
                                </Link>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

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
