import { useEffect, useRef, useState } from "react";
import useActiveSection from "../hooks/useActiveSection";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" }
];

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

const MODES = [
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
  { id: "system", label: "System" }
];

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 2.6v2.4" />
        <path d="M12 19v2.4" />
        <path d="M2.6 12h2.4" />
        <path d="M19 12h2.4" />
        <path d="M5.3 5.3l1.7 1.7" />
        <path d="M17 17l1.7 1.7" />
        <path d="M18.7 5.3L17 7" />
        <path d="M7 17l-1.7 1.7" />
      </g>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        d="M20.2 14.6A8.4 8.4 0 1 1 9.4 3.8a6.9 6.9 0 0 0 10.8 10.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Navbar({ mode, theme, onSelectMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const themeRef = useRef(null);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      setThemeOpen(false);
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (!themeOpen) return;

    const handleClick = (event) => {
      if (themeRef.current && !themeRef.current.contains(event.target)) {
        setThemeOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [themeOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  return (
    <header className="site-header">

      <div className="header-inner">

        <a className="brand" href="#home">
          Jhonard
        </a>

        <nav className="nav-pill" aria-label="Sections">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={active === link.id ? "is-active" : undefined}
                  aria-current={active === link.id ? "true" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">

          <div className="theme-control" ref={themeRef}>
            <button
              type="button"
              className="icon-btn"
              onClick={() => setThemeOpen((open) => !open)}
              aria-label="Change theme"
              aria-haspopup="menu"
              aria-expanded={themeOpen}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>

            {themeOpen && (
              <div className="theme-menu" role="menu">
                {MODES.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    role="menuitemradio"
                    aria-checked={mode === item.id}
                    className={mode === item.id ? "is-selected" : undefined}
                    onClick={() => {
                      onSelectMode(item.id);
                      setThemeOpen(false);
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            className={menuOpen ? "icon-btn menu-btn is-open" : "icon-btn menu-btn"}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="menu-bars">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

        </div>

      </div>

      {menuOpen && (
        <>
          <div className="menu-backdrop" onClick={() => setMenuOpen(false)}></div>

          <div className="mobile-menu" id="mobile-menu">
            <nav aria-label="Sections">
              <ul>
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className={active === link.id ? "is-active" : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              className="btn btn-solid"
              href="/CV.png"
              download
              onClick={() => setMenuOpen(false)}
            >
              Download CV
            </a>
          </div>
        </>
      )}

    </header>
  );
}

export default Navbar;
