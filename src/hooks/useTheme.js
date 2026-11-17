import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function readStored() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function readSystem() {
  if (typeof window === "undefined" || !window.matchMedia) return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function readApplied() {
  // index.html already resolved this before first paint.
  if (typeof document !== "undefined") {
    const applied = document.documentElement.getAttribute("data-theme");
    if (applied === "light" || applied === "dark") return applied;
  }
  return readStored() || readSystem();
}

/**
 * Three-way theme control: "light", "dark" or "system".
 *
 * "system" stores nothing and follows the OS live. Picking light or dark
 * stores that choice, and it wins until the visitor goes back to system.
 *
 * Returns the chosen `mode` and the `theme` actually on screen.
 */
export default function useTheme() {
  const [mode, setModeState] = useState(() => readStored() || "system");
  const [theme, setTheme] = useState(readApplied);

  useEffect(() => {
    const apply = () => {
      const next = mode === "system" ? readSystem() : mode;
      setTheme(next);
      document.documentElement.setAttribute("data-theme", next);
    };

    apply();

    if (mode !== "system" || typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const query = window.matchMedia("(prefers-color-scheme: dark)");
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, [mode]);

  const setMode = useCallback((next) => {
    try {
      if (next === "system") localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* private browsing — the choice still applies for this visit */
    }
    setModeState(next);
  }, []);

  return { mode, theme, setMode };
}
