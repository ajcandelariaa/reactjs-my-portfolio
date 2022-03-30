import React from "react";
import AboutButtons from "./about-components/about-buttons/AboutButtons";
import AboutInfo from "./about-components/about-info/AboutInfo";
import style from "./About.module.css";

function About() {
  return (
    <div className={`${style.container} about`}>
      <div className={style.wrapper}>
        <p className={style.heading}>About</p>
        <div className={style.about_grid}>
          <AboutButtons />
          <AboutInfo />
        </div>
      </div>
    </div>
  );
}

export default About;
