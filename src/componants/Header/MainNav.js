import classes from "./MainNav.module.css";

function MainNav() {
  return (
    <nav className={classes["main-nav"]}>
      <ul className={classes["main-nav-links"]}>
        <li className={classes["main-nav-link"]}>
          <a href="#about">about</a>
        </li>

        <li className={classes["main-nav-link"]}>
          <a href="#services">services</a>
        </li>

        <li className={classes["main-nav-link"]}>
          <a href="#skills">skills</a>
        </li>

        <li className={classes["main-nav-link"]}>
          <a href="#projects">projects</a>
        </li>

        <li className={classes["main-nav-link"]}>
          <a href="#content">contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
