import gaming from "../assets/gaming.png";
import nature from "../assets/nature.png";
import music from "../assets/music.png";
import draw from "../assets/draw.png";
import watch from "../assets/watch.png";

function Hobbies() {

  const hobbies = [
    {
      image: gaming,
      title: "Gaming",
      description:
        "I enjoy playing different types of games that inspire my creativity."
    },
    {
      image: nature,
      title: "Exploring Nature",
      description:
        "Exploring outdoor places gives me inspiration and fresh ideas."
    },
    {
      image: music,
      title: "Listening to Music",
      description:
        "Listening to music helps me relax, focus, and stay motivated."
    },
    {
      image: draw,
      title: "Drawing Houses",
      description:
        "I enjoy sketching houses and environments, especially game assets."
    },
    {
      image: watch,
      title: "Watching Gaming Content",
      description:
        "Watching gameplay and dev content helps me learn new techniques."
    }
  ];

  return (
    <section
      className="hobbies-section"
      id="hobbies"
    >

      <div className="section-title">

        <small>
          THINGS I LOVE
        </small>

        <h2>
          Hobbies & <span>Interests</span>
        </h2>

        <div className="divider"></div>

      </div>

      <div className="hobbies-grid">

        {hobbies.map((hobby, index) => (
          <div
            className="hobby-card"
            key={index}
          >

            <img
              src={hobby.image}
              alt={hobby.title}
              className="hobby-custom-icon"
            />

            <h3>
              {hobby.title}
            </h3>

            <p>
              {hobby.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Hobbies;