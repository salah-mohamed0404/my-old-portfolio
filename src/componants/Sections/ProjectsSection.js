import { useState } from "react";
import { projects } from "../../store/data";
import classes from "./ProjectsSection.module.css";

const btns = document.querySelectorAll(`.${classes["projects-section"]} .btn`);

function Projects() {
  let filteredProjects;
  const listItems = document.querySelectorAll(
    `.${classes["projects-section"]} li`
  );
  const [active, setActive] = useState("Featured");
  const technolgies = [...new Set(projects.map(project => project.technology))];

  // Filter project based on active button
  if (active === "Featured")
    filteredProjects = projects.filter(project => project.featured);
  else
    filteredProjects = projects.filter(
      project => project.technology === active
    );

  const btnFilterHandler = e => {
    btns.forEach(btn => btn.classList.remove("btn_active"));
    e.target.classList.add("btn_active");
    setActive(e.target.textContent);
  };

  const renderProject = project => (
    <li key={project.name} className="project-item">
      <figure>
        <img src={project.img} alt={project.name} />
      </figure>
      <div>
        <div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
        <span>{project.technology}</span>
      </div>
    </li>
  );

  return (
    <section id="projects" className={classes["projects-section"]}>
      <div className="container">
        <h2 className="heading-secondary">Projects</h2>
        <nav>
          <button className="btn btn_active" onClick={btnFilterHandler}>
            Featured
          </button>
          {technolgies.map(tech => (
            <button className="btn" onClick={btnFilterHandler} key={tech}>
              {tech}
            </button>
          ))}
        </nav>

        <ul>{filteredProjects.map(project => renderProject(project))}</ul>
      </div>
    </section>
  );
}

export default Projects;
