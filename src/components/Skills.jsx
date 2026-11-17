const SKILLS = [
  {
    icon: "🧩",
    title: "Frontend",
    description:
      "Building responsive, themed interfaces as single-page apps.",
    stack: [
      "React 19",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Vite"
    ]
  },
  {
    icon: "⚙️",
    title: "Backend & APIs",
    description:
      "Writing the APIs behind them, with validation and auth on every route.",
    stack: [
      "Node.js",
      "Express",
      "Hono",
      "Cloudflare Workers",
      "REST APIs",
      "JWT",
      "Zod"
    ]
  },
  {
    icon: "🗄️",
    title: "Databases & Storage",
    description:
      "Modelling data, writing migrations and keeping private files private.",
    stack: [
      "PostgreSQL",
      "Prisma",
      "Cloudflare D1",
      "Firebase Firestore",
      "R2",
      "Firebase Storage"
    ]
  },
  {
    icon: "📱",
    title: "Mobile & AR",
    description:
      "Native Android apps with maps, location and augmented reality.",
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Material 3",
      "ARCore",
      "MapLibre",
      "Google Maps SDK"
    ]
  },
  {
    icon: "🚀",
    title: "Tooling & Deployment",
    description: "Shipping to production, and testing what I ship.",
    stack: [
      "Git & GitHub",
      "Vercel",
      "Wrangler",
      "Docker",
      "Playwright",
      "PWA"
    ]
  },
  {
    icon: "🎨",
    title: "Design & Game Dev",
    description:
      "Designing the interfaces I build, and making games for the fun of it.",
    stack: [
      "UI design",
      "Responsive layouts",
      "Light & dark theming",
      "Roblox Studio"
    ]
  }
];

function Skills() {
  return (
    <section className="section" id="skills">

      <div className="container">

        <div className="section-head" data-reveal>
          <span className="eyebrow">WHAT I USE</span>

          <h2>
            My <span className="accent">Skills</span>
          </h2>

          <p className="section-sub">
            The stack behind the projects below.
          </p>
        </div>

        <div className="card-grid skills-grid">

          {SKILLS.map((skill) => (

            <article className="card skill-card" data-reveal key={skill.title}>

              <span className="card-icon" aria-hidden="true">
                {skill.icon}
              </span>

              <h3>{skill.title}</h3>

              <p>{skill.description}</p>

              <ul className="chip-row">
                {skill.stack.map((item) => (
                  <li className="chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;
