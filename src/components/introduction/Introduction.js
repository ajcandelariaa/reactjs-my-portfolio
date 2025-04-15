import React from "react";
import myImage from "../../images/introduction/aj2.png";
import style from "./Introduction.module.css";
import { motion } from "framer-motion";
import resume from "../../helpers/AJ_Candelaria_CV.pdf"

function Introduction() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className={`${style.container} introduction`}>
      <motion.div variants={fadeLeft} initial='hidden' animate='visible' transition={{ duration: 1, delay: .6  }} className={style.image_container}>
        <img src={myImage} alt="myImage" className={style.my_image} />
      </motion.div>
      <motion.div variants={fadeRight} initial='hidden' animate='visible' transition={{ duration: 1, delay: 1  }} className={style.info}>
        <p>Hello, I am</p>
        <h1>AJ</h1>
        <h1>Candelaria</h1>
        <p>Full-Stack Web and Mobile Developer | IT Specialist</p>

        <a href={resume} target="_blank" rel="noreferrer">Download my Resume</a>
      </motion.div>
    </div>
  );
}

export default Introduction;
