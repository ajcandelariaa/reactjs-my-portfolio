import React from "react";
import style from "./AboutButtons.module.css";

function AboutButtons() {
  return (
    <div className={style.buttons}>
      <button>About</button>
      <button>Skills</button>
      <button>Education</button>
      <button>Hobbies</button>
    </div>
  );
}

export default AboutButtons;
