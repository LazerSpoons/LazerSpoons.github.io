function Header() {
  return (
    <header className="nav" role="navigation" aria-label="Primary">
      <div className="nav-inner">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">SSG</span>
        </a>
        <nav className="nav-links" aria-label="Secondary">
          <a href="#experience">Experience</a>
          <a href="#work">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="/resume.pdf" download>Resume</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
