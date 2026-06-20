function Hero() {
  return (
    <section className="hero" aria-labelledby="intro">
      <div className="hero-mark" aria-hidden="true">
        S.
      </div>
      <div className="hero-copy">
        <p className="hero-name">Somil Gupta</p>
        <h1 id="intro">A Software Engineer.</h1>
        <p className="muted">
          Building things to solve problems, and a few things just for fun.
        </p>
        <div className="pill-row" aria-label="Focus areas">
          <span className="pill">python</span>
          <span className="pill">react</span>
          <span className="pill">aws</span>
          <span className="pill">java</span>
          <span className="pill">c++</span>
        </div>
      </div>
      <a href="/resume.pdf" download className="resume-btn">
        Download Resume
      </a>
    </section>
  );
}

export default Hero;
