function About() {
  return (
    <section id="about" aria-labelledby="about-h" className="about-section">
      <div className="about-text">
        <h2 id="about-h">About Me</h2>
        <p>
          Hey! I&apos;m <strong>Somil</strong>, a software engineer currently
          studying Computer Science at the University of Maryland, College Park.
          To me, coding my own projects is a pastime, and I love designing and
          building projects that allow me to learn new skills. Beyond coding, I
          love reading, Arcane, history, and cats. One day, I hope to be making
          truly impactful discoveries in this field, while surrounded by plenty
          of kitties.
        </p>
      </div>
      <img src="/bgimage.svg" alt="Photo of Somil" className="about-image" />
    </section>
  );
}

export default About;
