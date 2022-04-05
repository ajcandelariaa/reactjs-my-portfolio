import React from 'react'
import style from "./AboutHobbies.module.css";

import { motion } from "framer-motion";

function AboutHobbies() {
  const fade = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={style.hobbies__grid}>
      <motion.p variants={fade} initial='hidden' animate='visible' transition={{ duration: .5, delay: .1  }}><i className="fa-solid fa-basketball"></i>Basketball</motion.p>
      <motion.p variants={fade} initial='hidden' animate='visible' transition={{ duration: .5, delay: .2  }}><i className="fa-solid fa-fish"></i>Fishing</motion.p>
      <motion.p variants={fade} initial='hidden' animate='visible' transition={{ duration: .5, delay: .3  }}><i className="fa-solid fa-tent"></i>Camping</motion.p>
      <motion.p variants={fade} initial='hidden' animate='visible' transition={{ duration: .5, delay: .4  }}><i className="fa-solid fa-guitar"></i>Playing Guitar</motion.p>
      <motion.p variants={fade} initial='hidden' animate='visible' transition={{ duration: .5, delay: .5  }}><i className="fa-solid fa-basketball"></i>Playing Online Games</motion.p>
      <motion.p variants={fade} initial='hidden' animate='visible' transition={{ duration: .5, delay: .6  }}><i className="fa-solid fa-clapperboard"></i>Watching Movies & Anime</motion.p>
    </div>
  )
}

export default AboutHobbies