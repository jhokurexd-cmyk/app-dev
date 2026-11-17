/**
 * Logos come from Devicon (MIT), loaded in index.html.
 *
 * `icon`  — a Devicon font class.
 * `mono`  — the brand colour is near-black (Express, GitHub, Prisma, Vercel),
 *           so it is drawn in the current text colour instead and stays
 *           visible in both themes.
 * `text`  — fallback initials for the few tools Devicon has no icon for.
 */
const SKILLS = [
  { name: "React", icon: "devicon-react-original" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "Kotlin", icon: "devicon-kotlin-plain" },
  { name: "Jetpack Compose", icon: "devicon-jetpackcompose-plain" },
  { name: "ARCore", text: "AR" },
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "Express", icon: "devicon-express-original", mono: true },
  { name: "Hono", text: "Ho" },
  { name: "Cloudflare Workers", icon: "devicon-cloudflareworkers-plain" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
  { name: "Prisma", icon: "devicon-prisma-original", mono: true },
  { name: "Cloudflare D1", icon: "devicon-cloudflare-plain" },
  { name: "Firebase", icon: "devicon-firebase-plain" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-original" },
  { name: "Vite", icon: "devicon-vitejs-plain" },
  { name: "MapLibre", text: "ML" },
  { name: "Docker", icon: "devicon-docker-plain" },
  { name: "Playwright", icon: "devicon-playwright-plain" },
  { name: "Git & GitHub", icon: "devicon-github-original", mono: true },
  { name: "Vercel", icon: "devicon-vercel-original", mono: true },
  { name: "Roblox Studio", text: "Rb" }
];

function Skills() {
  return (
    <section className="section" id="skills">

      <div className="container">

        <div className="section-head" data-reveal>
          <h2>Skills &amp; Tools</h2>
          <p className="section-sub">Technologies I build with</p>
        </div>

        <ul className="skill-grid" data-reveal>
          {SKILLS.map((skill) => (
            <li className="skill-tile" key={skill.name}>

              <span className="skill-mark">
                {skill.icon ? (
                  <i
                    className={skill.mono ? skill.icon : `${skill.icon} colored`}
                    aria-hidden="true"
                  ></i>
                ) : (
                  <span className="skill-initials" aria-hidden="true">
                    {skill.text}
                  </span>
                )}
              </span>

              <span className="skill-name">{skill.name}</span>

            </li>
          ))}
        </ul>

      </div>

    </section>
  );
}

export default Skills;
