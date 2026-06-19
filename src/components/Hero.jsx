function Hero() {
  return (
    <section className="hero" aria-labelledby="intro">
      <div className="hero-mark" aria-hidden="true">S.</div>
      <div className="hero-copy">
        <h1 id="intro">A Developer...</h1>
        <p className="muted">Proficient in these, still learning much more.</p>
        <div className="pill-row" aria-label="Focus areas">
          <span className="pill">python</span>
          <span className="pill">react</span>
          <span className="pill">java</span>
          <span className="pill">git</span>
        </div>
      </div>
      <a href="/resume.pdf" download className="resume-btn">
        Download Resume
      </a>
    </section>
  );
}

export default Hero;
