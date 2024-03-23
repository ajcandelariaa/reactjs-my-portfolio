import React, { useEffect } from "react";
import AboutEducation from "../about-components/about-education/AboutEducation";
import AboutHobbies from "../about-components/about-hobbies/AboutHobbies";
import AboutInfo from "../about-components/about-info/AboutInfo";
import AboutSkills from "../about-components/about-skills/AboutSkills";
import style from "./AboutMobileView.module.css";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref, inView } = useInView();
  const controls = useAnimation();
  const animate2 = {
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: .2 } },
    hidden: { opacity: 0, x: 100 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={`${style.container} about`}>
      <div className={style.wrapper}>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={animate2}
          className={style.info}
        >
          <AnimatePresence>
            <div>
              <h1 className={style.title}>About</h1>
            <AboutInfo />
            </div>
            <div>
              <h1 className={style.title}>Skills</h1>
            <AboutSkills />
            </div>
            <div>
              <h1 className={style.title}>Education</h1>
              <AboutEducation />
            </div>
            <div>
              <h1 className={style.title}>Hobbies</h1>
              <AboutHobbies />
            </div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
