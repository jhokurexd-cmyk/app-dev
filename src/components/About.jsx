import bgImage from "../assets/bg.png";

function About() {
  return (
    <section className="section" id="about">

      <div className="container">

        <div className="section-head" data-reveal>
          <span className="eyebrow">WHO I AM</span>

          <h2>
            About <span className="accent">Me</span>
          </h2>
        </div>

        <div className="about-grid">

          <figure className="about-media" data-reveal>
            <img src={bgImage} alt="" />
          </figure>

          <div className="card prose" data-reveal>

            <p>
              Hi! I am{" "}
              <strong className="mark-accent">Jhonard Kurt Reyes</strong>, a
              BSIT student and full-stack developer. Ever since I was young,
              video games have been more than entertainment; they sparked
              imagination, creativity, and inspiration.
            </p>

            <p>
              That curiosity turned into building software other people
              depend on: a staff portal a buy-and-sell community runs its
              daily operations on, a management system for a dental clinic,
              and{" "}
              <strong className="mark-highlight">Histoury</strong>, an
              augmented-reality heritage guide to Intramuros with its own
              admin panel behind it.
            </p>

            <p>
              I still dream of creating my own games, building worlds,
              characters, and stories, and every system I ship teaches me
              something I can take back to that.
            </p>

            <p>
              I also enjoy{" "}
              <strong className="mark-highlight">UI design</strong> and{" "}
              <strong className="mark-highlight">drawing</strong>, especially
              creating houses and environments.
            </p>

            <p>
              I work best when fully invested, I collaborate well, and I am
              always open to learning and improving my skills.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
