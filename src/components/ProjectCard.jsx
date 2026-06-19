function ProjectCard({ title, description, skills }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="skills-text">Skills: {skills.join(", ")}</p>
    </article>
  );
}

export default ProjectCard;
