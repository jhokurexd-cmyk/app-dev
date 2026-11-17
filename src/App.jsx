import "./App.css";

import useTheme from "./hooks/useTheme";
import useScrollReveal from "./hooks/useScrollReveal";

import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const { mode, theme, setMode } = useTheme();

  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Background />

      <Navbar mode={mode} theme={theme} onSelectMode={setMode} />

      <main id="main">
        <Hero />

        <About />

        <Projects />

        <Skills />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
