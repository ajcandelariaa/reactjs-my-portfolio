import React from "react";
import style from "./AboutInfo.module.css";
import aj from "../../../../images/aj.jpg";

function AboutInfo() {
  return (
    <div className={style.info}>
      <p>
        I am Albert Joseph M. Candelaria who currently lives in Al Rigga, Dubai,
        UAE. I’m 21 years old who are currently studying Bachelor of Science in
        Information Technology with Specialization of Web and Mobile Application
        at FEU Institute of Technology. I’m a junior developer who can develop
        your website using React JS, Laravel and Codeigniter framework. I can
        also convert your website into native android mobile application by the
        use of Kotlin programming language.
      </p>
      <img src={aj} alt="aj" />
    </div>
  );
}

export default AboutInfo;
