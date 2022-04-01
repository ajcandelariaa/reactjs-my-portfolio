import React, { useState } from "react";
import AboutButtons from "./about-components/about-buttons/AboutButtons";
import AboutEducation from "./about-components/about-education/AboutEducation";
import AboutHobbies from "./about-components/about-hobbies/AboutHobbies";
import AboutInfo from "./about-components/about-info/AboutInfo";
import AboutSkills from "./about-components/about-skills/AboutSkills";
import style from "./About.module.css";

function About() {
  const [active, setActive] = useState("About");

  return (
    <div className={`${style.container} about`}>
      <div className={style.wrapper}>
        <p className={style.heading}>{active}</p>
        <div className={style.infos_container}>
          <AboutButtons active={active} setActive={setActive} />
          <div className={style.border}></div>
          <div className={style.info}>
            {active === "About" ? (
              <AboutInfo />
            ) : active === "Skills" ? (
              <AboutSkills />
            ) : active === "Education" ? (
              <AboutEducation />
            ) : (
              <AboutHobbies />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
