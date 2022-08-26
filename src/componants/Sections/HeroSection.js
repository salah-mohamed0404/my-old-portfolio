import classes from "./HeroSection.module.css";
import heroImg from "../../assets/MERN_Stack_Hero.png";

function HeroSection() {
  return (
    <section className={classes["section-hero"]}>
      <div className={classes.welcoming}>
        <h1>Hi, i'm Salah Mohamed.</h1>
        <p>I'm web developer</p>
        <a href="#skills" className="btn">
          To my skills
        </a>
      </div>
      <div className={classes.me}>
        <figure>
          <img src={heroImg} alt="MERN stack hero" />
        </figure>
      </div>
    </section>
  );
}

export default HeroSection;
