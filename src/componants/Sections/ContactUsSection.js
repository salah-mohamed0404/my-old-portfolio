import classes from "./ContactUsSection.module.css";

function ContactUsSection() {
  return (
    <section className={classes["contact-section"]}>
      <h2>Get in touch</h2>
      <ul className={classes["contact-links"]}>
        <li className={classes["contact-link"]}>
          <a href="mailto:salah.web.engineer@gmail.com">
            salah.web.engineer@gmail.com
          </a>
        </li>

        <li className={classes["contact-link"]}>
          <a href="tel:+20 01116387902">+201116387902</a>
        </li>
      </ul>
    </section>
  );
}

export default ContactUsSection;
