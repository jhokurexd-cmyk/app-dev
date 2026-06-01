import interview from "../assets/interview.png";
import roblox from "../assets/roblox.png";

function Projects() {

  const projects = [
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

          <div
            className="project-card"
            key={index}
          >

            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <h3>
              {project.title}
            </h3>

            <p>
              {project.description}
            </p>

            <div className="project-tags">
              <span>
                {project.tag}
              </span>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;