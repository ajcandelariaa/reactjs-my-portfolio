import React from "react";
import style from "./AboutInfo.module.css";
import aj from "../../../../images/about/aj-2024.jpg";
import { motion } from "framer-motion";

function AboutInfo() {
  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className={style.info}>
      <motion.p variants={fadeRight} initial='hidden' animate='visible' transition={{ duration: .5 }}>
      Hi, I'm AJ Candelaria, a 24-year-old full-stack developer passionate about building modern web, mobile, and desktop applications. With expertise in both front-end and back-end technologies, I specialize in creating user-focused, high-performance solutions that are clean, intuitive, and impactful. Whether it's a sleek website, a dynamic mobile app, or a powerful desktop tool, I bring ideas to life through thoughtful design and robust development. Let’s create something amazing together.
      </motion.p>
      <motion.img variants={fadeRight} initial='hidden' animate='visible' transition={{ duration: .5, delay: .2 }} src={aj} alt="aj" />
    </div>
  );
}

export default AboutInfo;
