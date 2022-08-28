import classes from "./Footer.module.css";
import { myLinkedin, myGithub } from "../../store/data";

function Footer() {
  return (
    <footer>
      <div className={classes.container}>
        <ul className={classes["work-links"]}>
          <li className={classes["work-link"]}>
            <a href={myLinkedin} target="blank">
              linkedin
            </a>
          </li>

          <li className={classes["work-link"]}>
            <a href={myGithub} target="blank">
              github
            </a>
          </li>
        </ul>

        <a href="#top" className={classes["go-top"]}>
          up arrow
        </a>

        <p>Made with passion by Salah Mohamed @2022 all rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
