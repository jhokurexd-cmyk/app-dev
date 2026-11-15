import interview from "../assets/interview.png";
import roblox from "../assets/roblox.png";

function Projects() {

  const projects = [
    {
      emoji: "🏛️",
      cover: "violet",
      title: "Histoury — Android App",
      type: "Capstone Project",
      description:
        "A location-based guide to Intramuros. Augmented reality rebuilds heritage sites where they once stood, arrival notifications unlock each story, and the narration, timeline and sources travel with you.",
      tags: ["Kotlin", "Jetpack Compose", "ARCore", "Firebase"],
      links: [
        { label: "View site", url: "https://histoury-landing.vercel.app" },
        { label: "Code", url: "https://github.com/jhokurexd-cmyk/histoury-android" }
      ]
    },
    {
      emoji: "🌐",
      cover: "blue",
      title: "Histoury — Website",
      type: "Landing Page",
      description:
        "The public face of Histoury: an animated walkthrough of the app, a gallery of all 19 heritage sites, an AR showcase and the Android download, built to read well on a phone.",
      tags: ["React", "Vite", "CSS"],
      links: [
        { label: "View site", url: "https://histoury-landing.vercel.app" },
        { label: "Code", url: "https://github.com/jhokurexd-cmyk/histoury-landing" }
      ]
    },
    {
      emoji: "🗂️",
      cover: "amber",
      title: "Histoury — Admin Panel",
      type: "Web Application",
      description:
        "The dashboard behind the app. Admins curate site histories, timelines and sources, manage AR scenes and geofences, review feedback and ratings, and watch live usage and API health.",
      tags: ["React", "Vite", "Firebase", "Firestore"],
      links: [
        { label: "View site", url: "https://histouryadmin.vercel.app" }
      ]
    },
    {
      emoji: "📋",
      cover: "rose",
      title: "CCABST Staff Portal",
      type: "Web Application",
      description:
        "A full-stack staff portal that records completed transactions, issues single-claim QR vouchers, and keeps evidence in private storage, with role-based accounts and an audit trail.",
      tags: ["React", "TypeScript", "Cloudflare Workers", "D1"],
      links: [
        { label: "View site", url: "https://ccabst-staff-portal.vercel.app" }
      ]
    },
    {
      emoji: "📖",
      cover: "emerald",
      title: "CCABST Handbook Website",
      type: "Website",
      description:
        "The public handbook site. Members claim vouchers by code, link or QR image decoded on their own device, check validity without exposing recipient details, and download their ticket.",
      tags: ["React", "Vite", "QR Claims"],
      links: []
    },
    {
      emoji: "🦷",
      cover: "cyan",
      title: "J.M.C Dental Clinic System",
      type: "Clinic Management",
      description:
        "A management system for a dental clinic: patient records and visits, an append-only ledger with printable receipts, braces packages, appointments, X-ray uploads and income reports.",
      tags: ["React", "Node.js", "PostgreSQL", "Prisma"],
      links: [
        { label: "View site", url: "https://jmc-weld.vercel.app" },
        { label: "Code", url: "https://github.com/jhokurexd-cmyk/JMC" }
      ]
    },
    {
      image: interview,
      title: "The Interview Room",
      type: "Game",
      description:
        "A Roblox experience focused on immersive interaction and environment design.",
      tags: ["Roblox Studio"],
      links: []
    },
    {
      image: roblox,
      title: "Sword Warfare Tycoon",
      type: "Game",
      description:
        "A tycoon-based Roblox game focused on progression systems and combat gameplay.",
      tags: ["Roblox Studio"],
      links: []
    }
  ];

  return (
    <section
      className="hobbies-section"
      id="projects"
    >

      <div className="section-title">

        <small>
          FEATURED WORK
        </small>

        <h2>
          My <span>Projects</span>
        </h2>

        <div className="divider"></div>

      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <article
            className="project-card"
            key={index}
          >

            {project.image ? (

              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

            ) : (

              <div className={"project-cover cover-" + project.cover}>
                <span>{project.emoji}</span>
              </div>

            )}

            <div className="project-body">

              <small className="project-type">
                {project.type}
              </small>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {project.links.length > 0 && (

                <div className="project-links">

                  {project.links.map((link) => (

                    <a
                      href={link.url}
                      key={link.label}
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

        ))}

      </div>

    </section>
  );
}

export default Projects;
