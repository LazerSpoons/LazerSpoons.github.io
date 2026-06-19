import { skills } from "../data/skills";

function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-h">
      <h2 id="skills-h">Skills</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skills-group" key={group.category}>
            <h3>{group.category}</h3>
            <div className="pill-row">
              {group.items.map((item) => (
                <span className="pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
