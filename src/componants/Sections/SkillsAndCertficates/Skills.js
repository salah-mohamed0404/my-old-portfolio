import classes from "./Skills.module.css";

function Skills() {
  const renderSkills = (skill) => (
    <li className={classes["skill-item"]}>
      <figure>
        <div className={classes["img-container"]}>
          <img src={skill.img} alt={skill.name} />
        </div>

        <figcaption>{skill.name}</figcaption>
      </figure>
    </li>
  );

  return (
    <ul className={classes["skills-list"]}>{/* Render Skills dynamic */}</ul>
  );
}

export default Skills;
