function Navbar() {
  return (
    <nav className="navbar" id="navbar">

      <div className="logo">
        My <span>Portfolio</span>
      </div>

      <ul className="nav-links">

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#hobbies">Hobbies</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#goals">Goals</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

      <a
  href="/CV.png"
  className="cv-btn"
  download
>
  ↓ Download CV
</a>
       

    </nav>
  );
}

export default Navbar;