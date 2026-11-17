const STATS = [
  { value: "8", label: "Projects built" },
  { value: "5", label: "Live deployments" },
  { value: "20+", label: "Technologies used" }
];

function About() {
  return (
    <section className="section" id="about">

      <div className="container">

        <div className="section-head" data-reveal>
          <h2>About Me</h2>
          <p className="section-sub">Get to know me better</p>
        </div>

        <div className="about-prose" data-reveal>

          <p>
            I'm a BSIT student and full-stack developer. Ever since I was
            young, video games have been more than entertainment; they sparked
            imagination, creativity, and inspiration, and they are what pushed
            me toward building software in the first place.
          </p>

          <p>
            That curiosity turned into systems other people depend on. I built
            the staff portal a buy-and-sell community runs its daily operations
            on, a management system for a dental clinic, and Histoury, an
            augmented-reality heritage guide to Intramuros with its own admin
            panel and landing page behind it.
          </p>

          <p>
            I work across the stack: React and TypeScript on the front end,
            Node.js, Express, Hono and Cloudflare Workers on the back, with
            PostgreSQL, Prisma, D1 and Firebase for data, and Kotlin with
            Jetpack Compose for Android. I care about the parts that are easy
            to skip — append-only ledgers that keep books auditable, audit
            logs on every change, and tests that run before anything ships.
          </p>

          <p>
            I still dream of creating my own games, building worlds,
            characters, and stories, and every system I ship teaches me
            something I can take back to that. I work best when fully
            invested, I collaborate well, and I'm always open to learning.
          </p>

        </div>

        <ul className="stat-row" data-reveal>
          {STATS.map((stat) => (
            <li className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>

      </div>

    </section>
  );
}

export default About;
