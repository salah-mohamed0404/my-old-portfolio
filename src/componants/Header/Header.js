import MainNav from "./MainNav";
import HeroSection from "./HeroSection";

import classes from "./Header.module.css";
import logoImg from "../../assets/logo.png";

function Header() {
  return (
    <header className={classes["main-header"]}>
      <header>
        <div className={classes.logo}>
          <img src={logoImg} alt="logo" />
        </div>

        <MainNav />
      </header>

      <HeroSection />
    </header>
  );
}

export default Header;
