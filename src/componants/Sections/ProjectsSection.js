import { useEffect, useState } from "react";
import { projects } from "../../store/data";
import classes from "./ProjectsSection.module.css";

let filteredProjects;

const technolgies = [
  "Featured",
  ...new Set(projects.map(project => project.technology)),
];

function Projects() {
  const [active, setActive] = useState("");
  const btns = document.querySelectorAll(
    `.${classes["projects-section"]} .btn`
  );
  const listItems = document.querySelectorAll(
    `.${classes["projects-section"]} li`
  );

  useEffect(() => {
    setActive("Featured");
  }, []);

  useEffect(() => {
    if (active === "Featured") btns[0].classList.add("btn_active");
  }, [active]);

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
    <li key={project.name}>
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
