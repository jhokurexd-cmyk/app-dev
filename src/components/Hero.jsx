import { useEffect, useState } from "react";
import profile from "../assets/Profile_Picture.jpg";

const BUILDS = [
  "web applications",
  "mobile apps",
  "internal tools",
  "AR experiences"
];

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        d="M12 2.4a9.6 9.6 0 0 0-3 18.7c-.5-.1-.9-.5-.9-1.2v-2c-2.4.4-3-.9-3.2-1.7-.1-.4-.6-1.3-1-1.6-.4-.2-.9-.7 0-.7.8 0 1.4.9 1.6 1.3.6 1 1.6.9 2.2.7.1-.6.4-1.1.7-1.4-2.3-.3-3.8-1.3-3.8-3.7 0-1 .4-1.9 1-2.6-.1-.3-.3-1.3.1-2.5 0 0 1 .3 2.2 1.1a8.6 8.6 0 0 1 4.2 0c1.2-.8 2.2-1.1 2.2-1.1.4 1.2.2 2.2.1 2.5.6.7 1 1.6 1 2.6 0 2.4-1.5 3.4-3.8 3.7.5.5.8 1.2.8 2.3v2.4c0 .7-.4 1.1-.9 1.2A9.6 9.6 0 0 0 12 2.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function useRotatingWord(words) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || words.length < 2) return;

    const timer = setInterval(
      () => setIndex((current) => (current + 1) % words.length),
      2600
    );

    return () => clearInterval(timer);
  }, [words]);

  return words[index];
}

function Hero() {
  const word = useRotatingWord(BUILDS);

  return (
    <section className="hero" id="home">

      <div className="container hero-grid">

        <div className="hero-copy">

          <h1>Jhonard Kurt Reyes</h1>

          <p className="hero-build">
            I build
            <span className="build-chip" key={word}>
              {word}
            </span>
          </p>

          <p className="lead">
            BSIT student and full-stack developer based in the Philippines,
            building production software for real users. Specialises in React,
            TypeScript, Node.js, Cloudflare Workers and native Android with
            Kotlin.
          </p>

          <div className="hero-cta">
            <a
              className="btn btn-outline"
              href="https://github.com/jhokurexd-cmyk"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
              GitHub
            </a>

            <a className="btn btn-outline" href="#contact">
              Contact
            </a>

            <a className="btn btn-solid" href="/CV.png" download>
              Download CV
            </a>
          </div>

        </div>

        <div className="hero-visual">
          <div className="portrait">
            <img src={profile} alt="Jhonard Kurt Reyes" />

            <span className="status-badge">
              <span className="status-dot" aria-hidden="true"></span>
              Available
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;
