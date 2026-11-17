const EMAIL = "reyesjhonardkurt@gmail.com";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <rect
        x="2.8"
        y="4.8"
        width="18.4"
        height="14.4"
        rx="2.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M3.6 7.2l8.4 6 8.4-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M7.3 3.6h2.1l1.5 3.9-2 1.3a10.6 10.6 0 0 0 4.9 4.9l1.3-2 3.9 1.5v2.1a2.4 2.4 0 0 1-2.6 2.4A14.6 14.6 0 0 1 4.9 6.2 2.4 2.4 0 0 1 7.3 3.6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M12 21s6.4-5.4 6.4-10.2A6.4 6.4 0 0 0 5.6 10.8C5.6 15.6 12 21 12 21Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="10.4"
        r="2.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M12 2.4a9.6 9.6 0 0 0-3 18.7c-.5-.1-.9-.5-.9-1.2v-2c-2.4.4-3-.9-3.2-1.7-.1-.4-.6-1.3-1-1.6-.4-.2-.9-.7 0-.7.8 0 1.4.9 1.6 1.3.6 1 1.6.9 2.2.7.1-.6.4-1.1.7-1.4-2.3-.3-3.8-1.3-3.8-3.7 0-1 .4-1.9 1-2.6-.1-.3-.3-1.3.1-2.5 0 0 1 .3 2.2 1.1a8.6 8.6 0 0 1 4.2 0c1.2-.8 2.2-1.1 2.2-1.1.4 1.2.2 2.2.1 2.5.6.7 1 1.6 1 2.6 0 2.4-1.5 3.4-3.8 3.7.5.5.8 1.2.8 2.3v2.4c0 .7-.4 1.1-.9 1.2A9.6 9.6 0 0 0 12 2.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

const CHANNELS = [
  {
    Icon: MailIcon,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`
  },
  {
    Icon: PhoneIcon,
    label: "Phone",
    value: "0916 381 0716",
    href: "tel:+639163810716"
  },
  {
    Icon: GitHubIcon,
    label: "GitHub",
    value: "jhokurexd-cmyk",
    href: "https://github.com/jhokurexd-cmyk",
    external: true
  },
  {
    Icon: PinIcon,
    label: "Location",
    value: "San Jose Del Monte, Bulacan",
    href: null
  }
];

function Contact() {
  return (
    <section className="section" id="contact">

      <div className="container">

        <div className="section-head" data-reveal>
          <span className="eyebrow">GET IN TOUCH</span>

          <h2>
            Contact <span className="accent">Me</span>
          </h2>
        </div>

        <div className="card contact-card" data-reveal>

          <div className="contact-intro">
            <h3>Let's connect</h3>

            <p>
              I'm open to internships, freelance builds and collaboration.
              If you have a project in mind — or just want to talk shop —
              my inbox is the fastest way to reach me.
            </p>

            <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
              Send me an email
            </a>
          </div>

          <ul className="contact-list">

            {CHANNELS.map(({ Icon, label, value, href, external }) => (

              <li className="contact-row" key={label}>

                <span className="contact-icon" aria-hidden="true">
                  <Icon />
                </span>

                <span className="contact-text">
                  <small>{label}</small>

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
                </span>

              </li>

            ))}

          </ul>

        </div>

      </div>

    </section>
  );
}

export default Contact;
