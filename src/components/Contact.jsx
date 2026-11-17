const EMAIL = "reyesjhonardkurt@gmail.com";

const CHANNELS = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "Phone", value: "0916 381 0716", href: "tel:+639163810716" },
  {
    label: "GitHub",
    value: "jhokurexd-cmyk",
    href: "https://github.com/jhokurexd-cmyk",
    external: true
  },
  { label: "Location", value: "San Jose Del Monte, Bulacan", href: null }
];

function Contact() {
  return (
    <section className="section" id="contact">

      <div className="container">

        <div className="section-head" data-reveal>
          <h2>Get In Touch</h2>
          <p className="section-sub">
            Open to internships, freelance work and collaboration
          </p>
        </div>

        <div className="contact-panel" data-reveal>

          <ul className="contact-list">
            {CHANNELS.map(({ label, value, href, external }) => (
              <li className="contact-row" key={label}>
                <span className="contact-label">{label}</span>

                {href ? (
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                  >
                    {value}
                  </a>
                ) : (
                  <span>{value}</span>
                )}
              </li>
            ))}
          </ul>

          <a className="btn btn-solid" href={`mailto:${EMAIL}`}>
            Send me an email
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;
