function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-h">
      <h2 id="contact-h">Contact</h2>
      <div className="contact-icons">
        <a
          href="https://github.com/LazerSpoons"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github-mark.svg" alt="GitHub" className="dark-icon" />
          <img src="/github-mark-white.svg" alt="GitHub" className="white-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/somil-gupta-03550b328/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/InBug-White.png" alt="LinkedIn" className="white-icon" />
          <img src="/InBug-White.png" alt="LinkedIn" className="dark-icon" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
