import { leadership } from "../data/leadership";

function Leadership() {
  return (
    <section id="leadership" aria-labelledby="leadership-h">
      <h2 id="leadership-h">Leadership</h2>
      <div className="card-grid">
        {leadership.map((item) => (
          <article className="card" key={item.org}>
            <h3>
              {item.role} <span className="timeline-org">· {item.org}</span>
            </h3>
            <p className="timeline-meta">{item.period}</p>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Leadership;
