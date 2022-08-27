import classes from "./AboutSection.module.css";
import aboutImg from "../../assets/me4.jpg";

function AboutSection() {
  return (
    <section id="about" className={classes["about-section"]}>
      <div className="container">
        <h2 className="heading-secondary">About me</h2>
        <div className={classes.main}>
          <div className={classes["about-text"]}>
            <h3 className="heading-tertiary">Hello! My name is Salah.</h3>
            <p>
              <br />
              I'm a College student in computers and AI faculty, Helwan
              university, and self learning web developer who is passionate
              about programming in gerneral and web development in particular.
            </p>
            <a href="#edu&exp" className="link">
              Cetificates
            </a>
          </div>
          <figure>
            <img src={aboutImg} alt="for me" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
