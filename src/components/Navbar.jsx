import { useEffect, useState } from "react";
import useActiveSection from "../hooks/useActiveSection";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "hobbies", label: "Hobbies" },
  { id: "goals", label: "Goals" },
  { id: "contact", label: "Contact" }
];

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="4.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <g
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      >
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
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
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

function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const isDark = theme === "dark";

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>

      <div className="header-inner">

        <a className="brand" href="#home">
          <span className="brand-mark">JK</span>

          <span className="brand-name">
            Jhonard Kurt
            <small>Full-Stack Developer</small>
          </span>
        </a>

        <nav className="primary-nav" aria-label="Sections">
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

          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <a className="btn btn-primary btn-sm cv-link" href="/CV.png" download>
            Download CV
          </a>

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
          <div
            className="menu-backdrop"
            onClick={() => setMenuOpen(false)}
          ></div>

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
              className="btn btn-primary"
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
