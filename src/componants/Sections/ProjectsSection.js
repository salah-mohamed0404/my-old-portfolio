import classes from "./ProjectsSection.module.css";

function Projects() {
  const renderProjects = (project) => (
    <li className={classes["project-item"]}>
      <img src="" alt="" />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <span className={classes["project-tech"]}>{project.technolgy}</span>
    </li>
  );

  return (
    <section id="projects" className={classes["projects-section"]}>
      <h2>Projects</h2>
      <nav className={classes["projects-nav"]}>
        <button
          className={`${classes["tech-filter-btn"]} tech-filter-btn__active`}
        >
          All
        </button>
        <button className={classes["tech-filter-btn"]}>React</button>
        <button className={classes["tech-filter-btn"]}>JavaScript</button>
        <button className={classes["tech-filter-btn"]}>HTML&CSS</button>
        <button className={classes["tech-filter-btn"]}>NodeJS</button>
      </nav>

      <ul className={classes["projects-list"]}>
        {/* Render project dynamic */}
      </ul>

      {/* Pagnation here */}
    </section>
  );
}

export default Projects;
