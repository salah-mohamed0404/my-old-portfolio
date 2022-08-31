import MainNav from "./MainNav";
import HeroSection from "./HeroSection";

import classes from "./Header.module.css";
import logoImg from "../../assets/logo.png";
import { useEffect, useState } from "react";

function Header() {
  const [first, refresh] = useState(false);
  useEffect(() => refresh(true), []);
  // Sticky navigation
  if (first) {
    const headerHeight = document
      .getElementById("nav-header")
      .getBoundingClientRect().height;
    const sectionHeroEl = document.getElementById("section-hero");

    const obs = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];

        if (!ent.isIntersecting) {
          document.body.classList.add("sticky");
        }

        if (ent.isIntersecting) {
          document.body.classList.remove("sticky");
        }
      },
      {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: `-${headerHeight}px`,
      }
    );
    obs.observe(sectionHeroEl);
  }

  const navBtnHandler = () =>
    document.getElementById("nav-header").classList.toggle(classes["nav-open"]);

  document
    .querySelectorAll("#nav-header a")
    .forEach(link =>
      link.addEventListener("click", () =>
        document
          .getElementById("nav-header")
          .classList.remove(classes["nav-open"])
      )
    );

  return (
    <header className={classes["main-header"]}>
      <header id="nav-header">
        <div className={classes.logo}>
          <img src={logoImg} alt="logo" />
        </div>

        <MainNav />

        <button className={classes["btn-mobile-nav"]} onClick={navBtnHandler}>
          <div></div>
        </button>
      </header>

      <HeroSection />
    </header>
  );
}

export default Header;
