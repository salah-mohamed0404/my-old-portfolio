import MainNav from "./MainNav";
import classes from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className={classes.logo}>
        <img src="" alt="" />
      </div>

      <MainNav />
    </header>
  );
}

export default Header;
