"use client";

import { useEffect, useState } from "react";
import styles from "./ThemeProvider.module.css";

function getAutoTheme(): "dark" | "light" {
  // Hardcoded to light as per user request for default
  return "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  // null = default auto, otherwise manual override
  const [manual, setManual] = useState<"dark" | "light" | null>(null);

  const apply = (t: "dark" | "light") => {
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
  };

  // Auto time-based logic
  useEffect(() => {
    const run = () => {
      if (manual === null) apply(getAutoTheme());
    };
    run();
    const interval = setInterval(run, 60_000);
    return () => clearInterval(interval);
  }, [manual]);

  // Apply manual override immediately when changed
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (manual !== null) apply(manual);
  }, [manual]);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setManual(next);
  };

  const resetAuto = () => {
    setManual(null);
  };

  const isManual = manual !== null;

  return (
    <>
      {children}

      {/* Theme badge / toggle button */}
      <button
        className={styles.themeBadge}
        onClick={toggle}
        title={isManual ? "Click to cycle theme (manual override active)" : "Click to toggle theme"}
        aria-label={`Current theme: ${theme}. Click to toggle.`}
      >
        <span className={styles.dot} data-theme-dot={theme} />
        <span className={styles.label}>
          {theme === "dark" ? "Night" : "Day"}
        </span>
        {/* Show override indicator + reset */}
        {isManual && (
          <span
            className={styles.manualTag}
            onClick={(e) => { e.stopPropagation(); resetAuto(); }}
            title="Reset to auto (time-based)"
          >
            manual ✕
          </span>
        )}
      </button>
    </>
  );
}
