import profile from "../assets/Profile_Picture.jpg";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        <div className="hero-left">
          <small className="hero-tag">
            BS INFORMATION TECHNOLOGY STUDENT
          </small>

          <h1>
            Jhonard Kurt <span>Reyes</span>
          </h1>

          <p>
            Aspiring game developer and UI designer passionate about
            creating cinematic digital experiences, immersive interfaces,
            and creative environments.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-btn primary-btn">
              View Projects
            </a>

            <a href="#contact" className="hero-btn secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-box">
              <h3>2+</h3>
              <span>Projects</span>
            </div>

            <div className="stat-box">
              <h3>BSIT</h3>
              <span>Student</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-card">
            <img src={profile} alt="Profile" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;