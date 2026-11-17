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

function readInitial() {
  // index.html already resolved this before first paint; trust it so the
  // first render matches what is on screen.
  if (typeof document !== "undefined") {
    const applied = document.documentElement.getAttribute("data-theme");
    if (applied === "light" || applied === "dark") return applied;
  }
  return readStored() || readSystem();
}

/**
 * Theme state for the whole page.
 *
 * First visit follows the operating system. Once the visitor uses the
 * toggle, their choice is stored and wins from then on.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(readInitial);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const query = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event) => {
      // a stored preference is deliberate, so leave it alone
      if (readStored()) return;
      setTheme(event.matches ? "dark" : "light");
    };

    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((previous) => {
      const next = previous === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* private browsing, storage full — the toggle still works for this visit */
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
