import bgImage from "../assets/bg.png";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-title">

        <h2>
          About <span>Me</span>
        </h2>

        <div className="divider"></div>

      </div>

      <div className="about-wrapper">

        <div className="about-image">
          <img
            src={bgImage}
            alt="About"
          />
        </div>

        <div className="about-card">

          <p>
            Hi! I am
            <span className="highlight-blue">
              {" "}Jhonard Kurt Reyes
            </span>
            , a BSIT student.
            Ever since I was young, video games have been more than
            entertainment; they sparked imagination, creativity,
            and inspiration.
          </p>

          <p>
            I dream of creating my own games, building worlds,
            characters, and stories.
            Learning programming and technology is helping me gain
            the skills to turn ideas into playable experiences.
          </p>

          <p>
            I also enjoy
            <span className="highlight-yellow">
              {" "}UI design
            </span>
            and
            <span className="highlight-yellow">
              {" "}drawing
            </span>
            , especially creating houses and environments.
          </p>

          <p>
            I work best when fully invested,
            I collaborate well,
            and I am always open to learning
            and improving my skills.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;