import React from "react";
import style from "./AboutInfo.module.css";
import aj from "../../../../images/about/aj.jpg";
import { motion } from "framer-motion";

function AboutInfo() {
  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={style.info}>
      <motion.p variants={fadeRight} initial='hidden' animate='visible' transition={{ duration: .5 }}>
      Meet AJ Candelaria, a 23-year-old developer passionate about crafting websites, mobile apps, and dabbling in desktop app development. With a knack for building sleek and functional digital solutions, I thrive on creating user-friendly experiences that leave a lasting impression. Whether it's optimizing websites for seamless navigation, designing intuitive mobile apps, or exploring the world of desktop applications, I'm always eager to tackle new challenges. Let's work together to turn your ideas into reality!
      </motion.p>
      <motion.img variants={fadeRight} initial='hidden' animate='visible' transition={{ duration: .5, delay: .2 }} src={aj} alt="aj" />
    </div>
  );
}

export default AboutInfo;
