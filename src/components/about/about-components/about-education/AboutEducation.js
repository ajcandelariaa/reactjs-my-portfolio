import React from "react";
import style from "./AboutEducation.module.css";
import education from "../../../../images/about/education.PNG";

import { motion } from "framer-motion";

function AboutEducation() {
  const fade = {
    hidden: { opacity: 0},
    visible: { opacity: 1},
  };
  
  return (
    <div className={style.info}>
      <div className={style.school_grid}>
        <motion.div variants={fade} initial='hidden' animate='visible' transition={{ duration: .5, delay: .4 }}>
          <div className={style.level}>
            <p>College (2018 – Present)</p>
          </div>
          <div className={style.level__info}>
            <p>FEU Institute of Technology</p>
            <p>
              839 P. Paredes, Sampaloc, Manila, 1015 Metro Manila, Philippines
            </p>
          </div>
        </motion.div>

        <motion.div variants={fade} initial='hidden' animate='visible' transition={{ duration: .5, delay: .3 }}>
          <div className={style.level}>
            <p>Senior High School (2016 – 2018)</p>
          </div>
          <div className={style.level__info}>
            <p>Technological University Of The Philippines, Manila</p>
            <p>Ayala Blvd. San Marcelino Street, Ermita Manila, Philippines</p>
          </div>
        </motion.div>

        <motion.div variants={fade} initial='hidden' animate='visible' transition={{ duration: .5, delay: .2 }}>
          <div className={style.level}>
            <p>Junior High School (2012 – 2016)</p>
          </div>
          <div className={style.level__info}>
            <p>Bangkal High School</p>
            <p>
              Gen. Malvar cor. Apolinario Street, Bangkal, Makati City,
              Philippines
            </p>
          </div>
        </motion.div>

        <motion.div variants={fade} initial='hidden' animate='visible' transition={{ duration: .5, delay: .1 }}>
          <div className={style.level}>
            <p>Elementary School (2006 – 2012)</p>
          </div>
          <div className={style.level__info}>
            <p>Bangkal Elementary School</p>
            <p>Gen. Malvar Street, Bangkal, Makati City, Philippines</p>
          </div>
        </motion.div>
      </div>
      <motion.img variants={fade} initial='hidden' animate='visible' transition={{ duration: .5, delay: .5 }} src={education} alt="education" />
    </div>
  );
}

export default AboutEducation;
