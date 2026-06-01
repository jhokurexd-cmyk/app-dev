import goal from "../assets/goal.png";

function Goals() {
  return (
    <section
      className="goals-section"
      id="goals"
    >

      <div className="section-title">

        <small>
          MY FUTURE
        </small>

        <h2>
          My <span>Goals</span>
        </h2>

        <div className="divider"></div>

      </div>

      <div className="goals-container">

        <img
          src={goal}
          alt="Goal"
          className="goal-image"
        />

        <div className="goal-card">

          <p>
            My goal is to become a skilled game developer creating
            meaningful interactive experiences and immersive worlds.
          </p>

          <p>
            I want to improve my programming,
            game design, and UI development skills
            while continuously learning new technologies.
          </p>

          <p>
            Through dedication and creativity,
            I hope to build projects that inspire,
            entertain, and positively impact others.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Goals;