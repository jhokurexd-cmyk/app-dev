const FOOTER_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">

      <div className="container footer-inner">

        <div className="footer-brand">
          <span className="brand-mark">JK</span>

          <span className="footer-identity">
            <strong>Jhonard Kurt Reyes</strong>
            <small>Full-stack developer · BSIT student</small>
          </span>
        </div>

        <nav className="footer-nav" aria-label="Sections">
          <ul>
            {FOOTER_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="footer-meta">
          © {year} Jhonard Kurt Reyes · Built with React and Vite
        </p>

      </div>

    </footer>
  );
}

export default Footer;
