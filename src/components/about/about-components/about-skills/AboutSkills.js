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

import { motion } from "framer-motion";


function AboutSkills() {
  const fade = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  
  const fade2 = {
    hidden: { opacity: 0},
    visible: { opacity: 1},
  };

  return (
    <div className={style.info}>
      <div>
        <motion.p variants={fade} initial='hidden' animate='visible' transition={{ duration: .5, delay: .1  }}>Web Development: </motion.p>
        <div className={style.logos}>
          <motion.img variants={fade2} initial='hidden' animate='visible' transition={{ duration: .5, delay: .2 }} src={html5} className={style.logo} alt="logo" />
          <motion.img variants={fade2} initial='hidden' animate='visible' transition={{ duration: .5, delay: .3 }} src={css} className={style.logo} alt="logo" />
          <motion.img variants={fade2} initial='hidden' animate='visible' transition={{ duration: .5, delay: .4 }} src={javascript} className={style.logo} alt="logo" />
          <motion.img variants={fade2} initial='hidden' animate='visible' transition={{ duration: .5, delay: .5 }} src={php} className={style.logo} alt="logo" />
          <motion.img variants={fade2} initial='hidden' animate='visible' transition={{ duration: .5, delay: .6 }} src={sass} className={style.logo} alt="logo" />
        </div>
      </div>

      <div>
        <motion.p variants={fade} initial='hidden' animate='visible' transition={{ duration: .5, delay: .7  }}>Database: </motion.p>
        <div className={style.logos}>
          <motion.img variants={fade2} initial='hidden' animate='visible' transition={{ duration: .5, delay: .8 }} src={mysql} className={style.logo} alt="logo" />
          <motion.img variants={fade2} initial='hidden' animate='visible' transition={{ duration: .5, delay: .9 }} src={firebase} className={style.logo} alt="logo" />
        </div>
      </div>

      <div>
        <motion.p variants={fade} initial='hidden' animate='visible' transition={{ duration: .5, delay: 1  }}>Frameworks: </motion.p>
        <div className={style.logos}>
          <motion.img variants={fade2} initial='hidden' animate='visible' transition={{ duration: .5, delay: 1.1 }} src={reactjs} className={style.logo} alt="logo" />
          <motion.img variants={fade2} initial='hidden' animate='visible' transition={{ duration: .5, delay: 1.2 }} src={laravel} className={style.logo} alt="logo" />
          <motion.img variants={fade2} initial='hidden' animate='visible' transition={{ duration: .5, delay: 1.3 }} src={codeigniter} className={style.logo} alt="logo" />
          <motion.img variants={fade2} initial='hidden' animate='visible' transition={{ duration: .5, delay: 1.4 }} src={bootstrap} className={style.logo} alt="logo" />
          <motion.img variants={fade2} initial='hidden' animate='visible' transition={{ duration: .5, delay: 1.5 }} src={tailwindcss} className={style.logo} alt="logo" />
        </div>
      </div>

      <div>
        <motion.p variants={fade} initial='hidden' animate='visible' transition={{ duration: .5, delay: 1.6  }}>Tools: </motion.p>
        <div className={style.logos}>
          <motion.img variants={fade2} initial='hidden' animate='visible' transition={{ duration: .5, delay: 1.7 }} src={figma} className={style.logo} alt="logo" />
          <motion.img variants={fade2} initial='hidden' animate='visible' transition={{ duration: .5, delay: 1.8 }} src={postman} className={style.logo} alt="logo" />
        </div>
      </div>

      <div>
        <motion.p variants={fade} initial='hidden' animate='visible' transition={{ duration: .5, delay: 1.9  }}>Others: </motion.p>
        <div className={style.logos}>
          <motion.img variants={fade2} initial='hidden' animate='visible' transition={{ duration: .5, delay: 2 }} src={java} className={style.logo} alt="logo" />
          <motion.img variants={fade2} initial='hidden' animate='visible' transition={{ duration: .5, delay: 2.1 }} src={androidKotlin} className={style.logo} alt="logo" />
          <motion.img variants={fade2} initial='hidden' animate='visible' transition={{ duration: .5, delay: 2.2 }} src={swift} className={style.logo} alt="logo" />
          <motion.img variants={fade2} initial='hidden' animate='visible' transition={{ duration: .5, delay: 2.3 }} src={cplusplus} className={style.logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default AboutSkills;
