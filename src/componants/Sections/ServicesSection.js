import classes from "./ServicesSection.module.css";
import serviceImg from "../../assets/services.png";

function Services() {
  return (
    <section id="services" className={classes["services-section"]}>
      <div className="container">
        <h2 className="heading-secondary">Services</h2>
        <div className={classes.main}>
          <div>
            <h3 className="heading-tertiary">FrontEnd</h3>
            <h4 className="subheading">(HTML, CSS, JS, and ReactJS)</h4>
            <p>
              I know that good development means good business So I keen to make
              consistent, efficient and powerful websites with wonderful and
              user friendly user interface that will empower your business.
            </p>
            <a href="#projects" className="link btn">
              Projects
            </a>
          </div>

          <figure>
            <img src={serviceImg} alt="FrontEnd technologies logo" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Services;
