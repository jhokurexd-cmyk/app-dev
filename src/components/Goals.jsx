import goal from "../assets/goal.png";

function Goals() {
  return (
    <section className="section" id="goals">

      <div className="container">

        <div className="section-head" data-reveal>
          <span className="eyebrow">MY FUTURE</span>

          <h2>
            My <span className="accent">Goals</span>
          </h2>
        </div>

        <div className="goals-grid">

          <figure className="goal-media" data-reveal>
            <img src={goal} alt="" />
          </figure>

          <div className="card prose goal-card" data-reveal>

            <p>
              My goal is to become a skilled developer who ships software
              people rely on, and to keep moving toward building games and
              immersive worlds of my own.
            </p>

            <p>
              I want to deepen my programming, system design, and UI
              development skills while continuously learning new
              technologies and tightening how I test and deploy what I
              build.
            </p>

            <p>
              Through dedication and creativity, I hope to build projects
              that inspire, entertain, and positively impact others.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Goals;
