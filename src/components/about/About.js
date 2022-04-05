import React, { useEffect, useState } from "react";
import AboutButtons from "./about-components/about-buttons/AboutButtons";
import AboutEducation from "./about-components/about-education/AboutEducation";
import AboutHobbies from "./about-components/about-hobbies/AboutHobbies";
import AboutInfo from "./about-components/about-info/AboutInfo";
import AboutSkills from "./about-components/about-skills/AboutSkills";
import style from "./About.module.css";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const [active, setActive] = useState("About");
  const { ref, inView } = useInView();
  const controls = useAnimation();

  const animate = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 50 },
  };

  const animate2 = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: 100 },
  };

  const animate3 = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: -100 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={`${style.container} about`}>
      <div className={style.wrapper}>
        <motion.p
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={animate}
          className={style.heading}
        >
          {active}
        </motion.p>
        <div className={style.infos_container}>
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={animate3}
            className={style.buttons_wrapper}
          >
            <AboutButtons active={active} setActive={setActive} />
          </motion.div>
          <div className={style.border}></div>
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={animate2}
            className={style.info}
          >
            <AnimatePresence>
              {active === "About" ? (
                <AboutInfo />
              ) : active === "Skills" ? (
                <AboutSkills />
              ) : active === "Education" ? (
                <AboutEducation />
              ) : (
                <AboutHobbies />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
