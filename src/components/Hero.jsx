import profile from "../assets/Profile_Picture.jpg";

const STATS = [
  { value: "8", label: "Projects built" },
  { value: "5", label: "Live deployments" },
  { value: "BSIT", label: "IT student" }
];

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="container hero-grid">

        <div className="hero-copy">

          <span className="badge">
            <span className="badge-dot" aria-hidden="true"></span>
            BSIT Student · Full-Stack Developer
          </span>

          <h1>
            Jhonard Kurt <span className="accent">Reyes</span>
          </h1>

          <p className="lead">
            I build web and mobile products that people actually run on —
            a community operations portal on Cloudflare Workers, a
            management system for a dental clinic, and an
            augmented-reality heritage guide for Android. I design the
            interfaces I build, and I make games on the side.
          </p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects">
              View my work
            </a>

            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>

          <ul className="stat-row">
            {STATS.map((stat) => (
              <li className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>

        </div>

        <div className="hero-visual">
          <div className="portrait">
            <img src={profile} alt="Jhonard Kurt Reyes" />
          </div>

          <span className="portrait-ring" aria-hidden="true"></span>
        </div>

      </div>

    </section>
  );
}

export default Hero;
