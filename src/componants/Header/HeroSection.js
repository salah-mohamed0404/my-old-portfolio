import classes from "./HeroSection.module.css";
import heroImg from "../../assets/MERN_Stack_Hero.png";

function HeroSection() {
  return (
    <section className={classes["section-hero"]}>
      <div className={classes.hero}>
        <div className={classes.welcoming}>
          <h1 className="heading-primary">
            Hi, i'm <strong>Salah Mohamed</strong>
          </h1>
          <h2 className="heading-secondary">
            I'm web developer <strong>(MERN Stack)</strong>
          </h2>
          <a href="#skills" className="btn link">
            To my skills
          </a>
        </div>

        <div className={classes.me}>
          <figure>
            <img src={heroImg} alt="MERN stack hero" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
