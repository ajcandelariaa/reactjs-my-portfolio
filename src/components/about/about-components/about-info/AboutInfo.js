import React from "react";
import style from "./AboutInfo.module.css";
import aj from "../../../../images/about/aj2.jpg";
import { motion } from "framer-motion";

function AboutInfo() {
  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={style.info}>
      <motion.p variants={fadeRight} initial='hidden' animate='visible' transition={{ duration: .5 }}>
      Hi, I'm AJ Candelaria, a 23-year-old web and mobile app developer driven by a passion for crafting innovative digital solutions. Specializing in both front-end and back-end technologies, I excel at creating sleek and functional websites, intuitive mobile apps, and even delving into desktop application development. With a strong focus on user-centric design and seamless navigation, I'm dedicated to delivering high-quality, dynamic projects that make a lasting impact. Let's collaborate to bring your ideas to life!
      </motion.p>
      <motion.img variants={fadeRight} initial='hidden' animate='visible' transition={{ duration: .5, delay: .2 }} src={aj} alt="aj" />
    </div>
  );
}

export default AboutInfo;
