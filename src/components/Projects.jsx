import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="work" aria-labelledby="work-h">
      <h2 id="work-h">Work and Projects</h2>
      <div className="card-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
        <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
          See more on my{" "}
          <a href="#contact">
            <u>GitHub</u>
          </a>
        </p>
      </div>
    </section>
  );
}

export default Projects;
