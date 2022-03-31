import React from "react";
import style from "./AboutSkills.module.css";
import html5 from "../../../../images/skills/html5.png";
import css from "../../../../images/skills/css.png";
import javascript from "../../../../images/skills/javascript.png";
import php from "../../../../images/skills/php.png";
import sass from "../../../../images/skills/sass.png";

import mysql from "../../../../images/skills/mysql.png";
import firebase from "../../../../images/skills/firebase.png";

import reactjs from "../../../../images/skills/reactjs.png";
import laravel from "../../../../images/skills/laravel.png";
import codeigniter from "../../../../images/skills/codeigniter.png";
import bootstrap from "../../../../images/skills/bootstrap.png";
import tailwindcss from "../../../../images/skills/tailwindcss.png";

import figma from "../../../../images/skills/figma.png";
import postman from "../../../../images/skills/postman.png";

import java from "../../../../images/skills/java.png";
import androidKotlin from "../../../../images/skills/androidKotlin.png";
import swift from "../../../../images/skills/swift.png";
import cplusplus from "../../../../images/skills/cplusplus.png";


function AboutSkills() {
  return (
    <div className={style.info}>
      <div>
        <p>Web Development: </p>
        <div className={style.logos}>
          <img src={html5} className={style.logo} alt="logo" />
          <img src={css} className={style.logo} alt="logo" />
          <img src={javascript} className={style.logo} alt="logo" />
          <img src={php} className={style.logo} alt="logo" />
          <img src={sass} className={style.logo} alt="logo" />
        </div>
      </div>

      <div>
        <p>Database: </p>
        <div className={style.logos}>
          <img src={mysql} className={style.logo} alt="logo" />
          <img src={firebase} className={style.logo} alt="logo" />
        </div>
      </div>

      <div>
        <p>Frameworks: </p>
        <div className={style.logos}>
          <img src={reactjs} className={style.logo} alt="logo" />
          <img src={laravel} className={style.logo} alt="logo" />
          <img src={codeigniter} className={style.logo} alt="logo" />
          <img src={bootstrap} className={style.logo} alt="logo" />
          <img src={tailwindcss} className={style.logo} alt="logo" />
        </div>
      </div>

      <div>
        <p>Tools: </p>
        <div className={style.logos}>
          <img src={figma} className={style.logo} alt="logo" />
          <img src={postman} className={style.logo} alt="logo" />
        </div>
      </div>

      <div>
        <p>Others: </p>
        <div className={style.logos}>
          <img src={java} className={style.logo} alt="logo" />
          <img src={androidKotlin} className={style.logo} alt="logo" />
          <img src={swift} className={style.logo} alt="logo" />
          <img src={cplusplus} className={style.logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default AboutSkills;
