import { useState } from "react";
import { createPortal } from "react-dom";
import Header from "./componants/Header/Header";
import LoadingSpinner from "./componants/Loading/LoadingSpinner";
import Main from "./componants/Main";

let firstLoad = true;

function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const loadingEl = document.getElementById("loading");
  window.addEventListener("load", () => loadingEl.classList.add("loaded"));
  if (firstLoad && loadingEl.classList.contains("loaded")) {
    firstLoad = false;
    setIsLoading(false);
  }

  return (
    <>
      <Header />
      <Main />
      {isLoading &&
        createPortal(<LoadingSpinner />, document.getElementById("loading"))}
    </>
  );
}

export default Portfolio;
