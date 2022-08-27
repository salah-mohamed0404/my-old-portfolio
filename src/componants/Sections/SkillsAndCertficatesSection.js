import classes from "./SkillsAndCertficatesSection.module.css";
import Certificates from "./SkillsAndCertficates/Certificates";
import Skills from "./SkillsAndCertficates/Skills";

function SkillsAndCertficates() {
  return (
    <section id="skills" className={classes["skillAndCertficates-sectoin"]}>
      <h2>Skills & Certificates</h2>
      <Skills />
      <Certificates />
    </section>
  );
}

export default SkillsAndCertficates;
