import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={classes.container}>
        <ul className={classes["work-links"]}>
          <li className={classes["work-link"]}>
            <a href="https://www.linkedin.com/in/salah-mohamed-1649b0234/">
              facebook
            </a>
          </li>

          <li className={classes["work-link"]}>
            <a href="https://github.com/salahcst344">github</a>
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
