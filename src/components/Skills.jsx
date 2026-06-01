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