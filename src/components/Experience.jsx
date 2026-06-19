import { experience } from "../data/experience";

function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-h">
      <h2 id="experience-h">Experience</h2>
      <div className="timeline">
        {experience.map((job) => (
          <article className="timeline-item" key={job.org}>
            <div className="timeline-head">
              <h3>
                {job.role} <span className="timeline-org">· {job.org}</span>
              </h3>
              <span className="timeline-meta">
                {job.location} | {job.period}
              </span>
            </div>
            <ul className="timeline-points">
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
