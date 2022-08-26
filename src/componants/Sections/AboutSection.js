import classes from "./AboutSection.nodule.css";

function AboutSection() {
  return (
    <section id="about" className={classes["about-section"]}>
      <div className={classes["about-text"]}>
        <h2>About me</h2>
        <p>
          Hello! My name is Salah Mohamed.
          <br />
          I'm a College student in computers and AI faculty, Helwan university,
          and self learning web developer who is passionate about programming in
          gerneral and web development in particular.
        </p>
        <a href="#edu&exp" className="btn" />
      </div>

      <figure>
        <img src="" alt="" />
      </figure>
    </section>
  );
}

export default AboutSection;
