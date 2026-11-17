import "./App.css";

import useTheme from "./hooks/useTheme";
import useScrollReveal from "./hooks/useScrollReveal";

import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import Goals from "./components/Goals";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const { theme, toggleTheme } = useTheme();

  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Background />

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main id="main">
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Hobbies />

        <Goals />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
