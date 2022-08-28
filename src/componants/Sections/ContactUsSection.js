import classes from "./ContactUsSection.module.css";
import { myEmail, myPhone } from "../../store/data";

function ContactUsSection() {
  return (
    <section id="contact" className={classes["contact-section"]}>
      <h2>Get in touch</h2>
      <ul className={classes["contact-links"]}>
        <li className={classes["contact-link"]}>
          <a href={`mailto:${myEmail}`}>{myEmail}</a>
        </li>

        <li className={classes["contact-link"]}>
          <a href={`tel:${myPhone}`}>{myPhone}</a>
        </li>
      </ul>
    </section>
  );
}

export default ContactUsSection;
