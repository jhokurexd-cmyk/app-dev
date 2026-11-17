import shotPortal from "../assets/shot-ccabst-portal.jpg";
import shotHandbook from "../assets/shot-ccabst-handbook.jpg";
import shotHistoury from "../assets/shot-histoury.jpg";
import shotJmc from "../assets/shot-jmc.jpg";
import interview from "../assets/interview.png";
import roblox from "../assets/roblox.png";

const PROJECTS = [
  {
    image: shotPortal,
    tag: "web app",
    title: "CCABST Staff Portal",
    description:
      "Role-based portal where community staff log completed transactions with private proof and admins verify them. The server parses and timestamps every post itself, so records can't be backdated.",
    tech: ["React 19", "TypeScript", "Cloudflare Workers", "Hono", "D1", "R2", "Tailwind", "Playwright"],
    links: [{ label: "Live Demo", url: "https://ccabst-staff-portal.vercel.app" }]
  },
  {
    image: shotHandbook,
    tag: "web app",
    title: "CCABST Web Handbook",
    description:
      "The community's public handbook: ranked staff directory, rules, policies, refunds and bulletin, plus voucher claiming by code or QR image decoded on the member's own device.",
    tech: ["React", "Vite", "React Router", "Vercel"],
    links: [{ label: "Live Demo", url: "https://ccabst-handbook.vercel.app" }]
  },
  {
    image: shotHistoury,
    tag: "mobile + web",
    title: "Histoury",
    description:
      "An Android heritage guide to Intramuros with AR scenes, maps, turn-by-turn directions, audio guides and offline downloads — plus a web admin panel and a landing page that ships the app.",
    tech: ["Kotlin", "Jetpack Compose", "ARCore", "MapLibre", "Firebase", "React 19", "Leaflet"],
    links: [
      { label: "Live Demo", url: "https://histoury-landing.vercel.app" },
      { label: "GitHub", url: "https://github.com/jhokurexd-cmyk/histoury-android" }
    ]
  },
  {
    image: shotJmc,
    tag: "web app",
    title: "JMC Dental Clinic",
    description:
      "Clinic management for a solo dentist: patient records, append-only billing ledger with voids and refunds, braces packages, appointments, X-rays and income reports.",
    tech: ["React", "Node.js", "Express", "Prisma", "PostgreSQL", "FullCalendar", "Docker"],
    links: [
      { label: "Live Demo", url: "https://jmc-weld.vercel.app" },
      { label: "GitHub", url: "https://github.com/jhokurexd-cmyk/JMC" }
    ]
  },
  {
    image: interview,
    contain: true,
    tag: "game",
    title: "The Interview Room",
    description:
      "A Roblox experience focused on immersive interaction and environment design.",
    tech: ["Roblox Studio"],
    links: []
  },
  {
    image: roblox,
    contain: true,
    tag: "game",
    title: "Sword Warfare Tycoon",
    description:
      "A tycoon-based Roblox game focused on progression systems and combat gameplay.",
    tech: ["Roblox Studio"],
    links: []
  }
];

const MAX_CHIPS = 4;

function Projects() {
  return (
    <section className="section" id="projects">

      <div className="container">

        <div className="section-head" data-reveal>
          <h2>Featured Projects</h2>
          <p className="section-sub">Some of my best work</p>
        </div>

        <div className="project-grid">

          {PROJECTS.map((project) => {
            const shown = project.tech.slice(0, MAX_CHIPS);
            const extra = project.tech.length - shown.length;

            return (
              <article className="project-card" data-reveal key={project.title}>

                <div
                  className={
                    project.contain ? "project-media is-contain" : "project-media"
                  }
                >
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>

                <div className="project-body">

                  <span className="project-tag">{project.tag}</span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <ul className="chip-row">
                    {shown.map((item) => (
                      <li className="chip" key={item}>
                        {item}
                      </li>
                    ))}

                    {extra > 0 && <li className="chip chip-more">+{extra}</li>}
                  </ul>

                  {project.links.length > 0 && (
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          className={
                            link.label === "GitHub"
                              ? "btn btn-outline btn-sm"
                              : "btn btn-outline btn-sm btn-grow"
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}

                </div>

              </article>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Projects;
