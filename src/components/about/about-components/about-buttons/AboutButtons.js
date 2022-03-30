import React from "react";
import style from "./AboutButtons.module.css";

function AboutButtons({active, setActive}) {
  return (
    <div className={style.buttons}>
      <button className={active === "About" ? style.btn_active : style.btn } onClick={() => setActive("About")}>About</button>
      <button className={active === "Skills" ? style.btn_active : style.btn } onClick={() => setActive("Skills")}>Skills</button>
      <button className={active === "Education" ? style.btn_active : style.btn } onClick={() => setActive("Education")}>Education</button>
      <button className={active === "Hobbies" ? style.btn_active : style.btn } onClick={() => setActive("Hobbies")}>Hobbies</button>
    </div>
  );
}

export default AboutButtons;
