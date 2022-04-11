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
        I am Albert Joseph M. Candelaria who currently lives in Al Rigga, Dubai,
        UAE. I’m 21 years old who is currently studying Bachelor of Science in
        Information Technology with Specialization of Web and Mobile Application
        at FEU Institute of Technology. I’m a junior developer who can develop
        your website using React JS, Laravel and Codeigniter framework. I can
        also convert your website into native android mobile application by the
        use of Kotlin programming language.
      </motion.p>
      <motion.img variants={fadeRight} initial='hidden' animate='visible' transition={{ duration: .5, delay: .2 }} src={aj} alt="aj" />
    </div>
  );
}

export default AboutInfo;
