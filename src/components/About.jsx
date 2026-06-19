function About() {
  return (
    <section id="about" aria-labelledby="about-h" className="about-section">
      <div className="about-text">
        <h2 id="about-h">About Me</h2>
        <p>
          Hey! I&apos;m <strong>Somil</strong>, a software engineer studying
          Computer Science at the University of Maryland, College Park. To me,
          coding my own projects is a pastime, and I love designing and building
          things that let me learn new skills. Beyond coding, I love reading,
          Arcane, history, and cats. One day, I hope to be making truly
          impactful discoveries in this field, while surrounded by plenty of
          kitties.
        </p>

        <div className="education">
          <h3>Education</h3>
          <p className="edu-school">
            University of Maryland, College Park — B.S. Computer Science
          </p>
          <p className="edu-detail">
            Expected May 2028 · Minor in Chinese Language · GPA 3.58 · Dean&apos;s
            List
          </p>
        </div>
      </div>
      <img src="/bgimage.svg" alt="Photo of Somil" className="about-image" />
    </section>
  );
}

export default About;
