function Skills() {

  const skills = [
    {
      icon: "⚛️",
      title: "React",
      description: "Building component-based interfaces with Vite and hooks."
    },
    {
      icon: "📱",
      title: "Kotlin",
      description: "Writing Android apps with Jetpack Compose and Material 3."
    },
    {
      icon: "🔷",
      title: "TypeScript",
      description: "Typed JavaScript for larger, safer web applications."
    },
    {
      icon: "🔥",
      title: "Firebase",
      description: "Authentication, Firestore, Storage and Cloud Functions."
    },
    {
      icon: "⚡",
      title: "JavaScript",
      description: "Adding interactive and dynamic website functionality."
    },
    {
      icon: "🎨",
      title: "CSS",
      description: "Creating visually appealing layouts and animations."
    },
    {
      icon: "💻",
      title: "HTML",
      description: "Structuring responsive and modern web interfaces."
    },
    {
      icon: "🌿",
      title: "Git & GitHub",
      description: "Version control and deploying straight to Vercel."
    }
  ];

  return (
    <section className="hobbies-section" id="skills">

      <div className="section-title">
        <small>WHAT I USE</small>

        <h2>
          My <span>Skills</span>
        </h2>

        <div className="divider"></div>
      </div>

      <div className="hobbies-grid skills-grid">
        {skills.map((skill, index) => (
          <div className="hobby-card skill-card" key={index}>
            <div className="hobby-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;
function Skills() {

  const skills = [
    {
      icon: "💻",
      title: "HTML",
      description: "Structuring responsive and modern web interfaces."
    },
    {
      icon: "🎨",
      title: "CSS",
      description: "Creating visually appealing layouts and animations."
    },
    {
      icon: "⚡",
      title: "JavaScript",
      description: "Adding interactive and dynamic website functionality."
    }
  ];

  return (
    <section className="hobbies-section" id="skills">

      <div className="section-title">
        <small>WHAT I USE</small>

        <h2>
          My <span>Skills</span>
        </h2>

        <div className="divider"></div>
      </div>

      <div className="hobbies-grid">
        {skills.map((skill, index) => (
          <div className="hobby-card" key={index}>
            <div className="hobby-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;
