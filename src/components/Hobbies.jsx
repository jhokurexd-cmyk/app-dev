import gaming from "../assets/gaming.png";
import nature from "../assets/nature.png";
import music from "../assets/music.png";
import draw from "../assets/draw.png";
import watch from "../assets/watch.png";

const HOBBIES = [
  {
    image: gaming,
    title: "Gaming",
    description:
      "I enjoy playing different types of games that inspire my creativity."
  },
  {
    image: nature,
    title: "Exploring Nature",
    description: "Exploring outdoor places gives me inspiration and fresh ideas."
  },
  {
    image: music,
    title: "Listening to Music",
    description: "Music helps me relax, focus, and stay motivated."
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

function Hobbies() {
  return (
    <section className="section" id="hobbies">

      <div className="container">

        <div className="section-head" data-reveal>
          <span className="eyebrow">THINGS I LOVE</span>

          <h2>
            Hobbies & <span className="accent">Interests</span>
          </h2>
        </div>

        <div className="card-grid hobby-grid">

          {HOBBIES.map((hobby) => (

            <article className="card hobby-card" data-reveal key={hobby.title}>

              <img className="hobby-icon" src={hobby.image} alt="" />

              <h3>{hobby.title}</h3>

              <p>{hobby.description}</p>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Hobbies;
