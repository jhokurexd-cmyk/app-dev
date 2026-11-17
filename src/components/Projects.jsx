import interview from "../assets/interview.png";
import roblox from "../assets/roblox.png";

const FEATURED = [
  {
    type: "FULL-STACK · INTERNAL TOOL",
    title: "CCABST Staff Portal",
    tagline: "Operations portal for the staff team of a buy-and-sell community.",
    description:
      "Staff log completed transactions and upload private proof, and admins verify them. The server parses every transaction post itself, stamps it in Philippine time, and credits it to the signed-in staff member, so records cannot be backdated or reassigned from the browser.",
    features: [
      "Verification, dispute and cancellation workflow with private evidence storage",
      "SHA-256 screenshot fingerprinting that blocks duplicate submissions",
      "Leaderboards, quotas and per-staff performance history",
      "Single-claim QR vouchers, Excel exports and a full audit log",
      "Installable PWA with light and dark themes and mobile record cards"
    ],
    tech: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Cloudflare Workers",
      "Hono",
      "D1",
      "R2",
      "Vite",
      "PWA",
      "Playwright"
    ],
    links: [
      { label: "Live site", url: "https://ccabst-staff-portal.vercel.app" }
    ]
  },
  {
    type: "FRONT-END · PUBLIC SITE",
    title: "CCABST Web Handbook",
    tagline: "The community's public handbook and voucher desk.",
    description:
      "The public-facing companion to the staff portal. It gathers the ranked staff directory, community rules, policies, refund process, bulletin and feedback channels into one place, and lets members claim a voucher or check its status.",
    features: [
      "Nine routed pages inside a single-page app shell",
      "Voucher claiming by code or QR image, decoded on the member's own device",
      "Ranked staff directory with verified profile links"
    ],
    tech: ["React", "Vite", "React Router", "Vercel"],
    links: [{ label: "Live site", url: "https://ccabst-handbook.vercel.app" }]
  },
  {
    type: "MOBILE + WEB · THREE DELIVERABLES",
    title: "Histoury",
    tagline:
      "A heritage-tourism platform for Intramuros: Android app, admin panel and landing page.",
    description:
      "An Android guide to the historic sites of Intramuros, backed by a web admin panel the team uses to manage its content and a landing page that distributes the app. The app maps the sites, routes visitors to them turn by turn, unlocks content when they arrive, and renders AR scenes on location.",
    features: [
      "Kotlin and Jetpack Compose app with AR scenes, maps, turn-by-turn directions and geofenced arrivals",
      "Itineraries, audio guides, offline downloads, reviews and rankings",
      "Firebase Auth, Firestore, Storage, Cloud Functions and App Check",
      "Admin panel for sites, places, AR timelines, geofences, users, ratings and feedback",
      "Scroll-driven landing page with install guide, FAQ and a checksum-verified APK release"
    ],
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "Material 3",
      "ARCore",
      "MapLibre",
      "Firebase",
      "React 19",
      "Leaflet",
      "Vite"
    ],
    links: [
      { label: "Landing page", url: "https://histoury-landing.vercel.app" },
      { label: "Admin panel", url: "https://histouryadmin.vercel.app" },
      {
        label: "App on GitHub",
        url: "https://github.com/jhokurexd-cmyk/histoury-android"
      }
    ]
  },
  {
    type: "FULL-STACK · CLINIC SOFTWARE",
    title: "JMC Dental Clinic Management System",
    tagline: "Patient records, billing and scheduling for a dental practice.",
    description:
      "A management system for a solo-dentist clinic, covering patient records, visit history, procedures, appointments and income in one app. Billing runs on an append-only ledger: balances are always computed from entries and mistakes are corrected with new entries instead of edits, which keeps the clinic's books auditable.",
    features: [
      "Append-only ledger with voids, refunds and sequential printable receipts",
      "Braces installment packages with editable pricing and tracked freebie benefits",
      "Appointment calendar with overlap warnings and visit close-out",
      "X-ray uploads, daily, weekly and monthly income, and CSV report exports",
      "Owner, dentist and staff roles, hashed credentials and an audit row on every change"
    ],
    tech: [
      "React",
      "Vite",
      "React Router",
      "FullCalendar",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Docker"
    ],
    links: [
      { label: "Live site", url: "https://jmc-weld.vercel.app" },
      { label: "GitHub", url: "https://github.com/jhokurexd-cmyk/JMC" }
    ]
  }
];

const GAMES = [
  {
    image: interview,
    title: "The Interview Room",
    description:
      "A Roblox experience focused on immersive interaction and environment design.",
    tag: "Roblox Studio"
  },
  {
    image: roblox,
    title: "Sword Warfare Tycoon",
    description:
      "A tycoon-based Roblox game focused on progression systems and combat gameplay.",
    tag: "Roblox Studio"
  }
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path
        d="M7 17L17 7M17 7H9M17 7v8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Projects() {
  return (
    <section className="section" id="projects">

      <div className="container">

        <div className="section-head" data-reveal>
          <span className="eyebrow">FEATURED WORK</span>

          <h2>
            My <span className="accent">Projects</span>
          </h2>

          <p className="section-sub">
            Four products in production — what each one does, and what it
            runs on.
          </p>
        </div>

        <div className="project-grid">

          {FEATURED.map((project) => (

            <article className="card project-card" data-reveal key={project.title}>

              <header className="project-head">
                <span className="eyebrow eyebrow-amber">{project.type}</span>

                <h3>{project.title}</h3>

                <p className="project-tagline">{project.tagline}</p>
              </header>

              <p className="project-body">{project.description}</p>

              <ul className="feature-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <ul className="chip-row">
                {project.tech.map((tech) => (
                  <li className="chip" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>

              <footer className="project-links">
                {project.links.map((link) => (
                  <a
                    className="link-btn"
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                    <ArrowIcon />
                  </a>
                ))}
              </footer>

            </article>

          ))}

        </div>

        <div className="section-head subhead" data-reveal>
          <span className="eyebrow">ALSO BUILT</span>

          <h2>
            Game <span className="accent">Development</span>
          </h2>
        </div>

        <div className="game-grid">

          {GAMES.map((game) => (

            <article className="card game-card" data-reveal key={game.title}>

              <div className="game-media">
                <img src={game.image} alt={game.title} />
              </div>

              <div className="game-body">
                <h3>{game.title}</h3>

                <p>{game.description}</p>

                <ul className="chip-row">
                  <li className="chip">{game.tag}</li>
                </ul>
              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;
