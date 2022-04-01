import React from "react";
import style from "./AboutButtons.module.css";

function AboutButtons({active, setActive}) {
  return (
    <div className={style.buttons}>
      <button className={`${style.btn} ${active === "About" ? style.btn_active : ''}` } onClick={() => setActive("About")}>About</button>
      <button className={`${style.btn} ${active === "Skills" ? style.btn_active : ''}` } onClick={() => setActive("Skills")}>Skills</button>
      <button className={`${style.btn} ${active === "Education" ? style.btn_active : ''}` } onClick={() => setActive("Education")}>Education</button>
      <button className={`${style.btn} ${active === "Hobbies" ? style.btn_active : ''}` } onClick={() => setActive("Hobbies")}>Hobbies</button>
    </div> 
  );
}

export default AboutButtons;
