import classes from "./ContactUsSection.module.css";
import { myEmail, myPhone } from "../../store/data";

function ContactUsSection() {
  return (
    <section id="contact" className={classes["contact-section"]}>
      <div className="container">
        <h2 className="heading-secondary">Get in touch:</h2>
        <ul>
          <li>
            <a href={`mailto:${myEmail}`} className="link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
              </svg>
              {myEmail}
            </a>
          </li>

          <li>
            <a href={`tel:${myPhone}`} className="link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M16 22.621l-3.521-6.795c-.007.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.082-1.026-3.492-6.817-2.106 1.039c-1.639.855-2.313 2.666-2.289 4.916.075 6.948 6.809 18.071 12.309 18.045.541-.003 1.07-.113 1.58-.346.121-.055 2.102-1.029 2.11-1.033zm-2.5-13.621c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm9 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-4.5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" />
              </svg>
              {myPhone}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ContactUsSection;
