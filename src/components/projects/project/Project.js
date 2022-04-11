import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import style from "./Project.module.css";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Project({ project }) {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  const animate = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.3 },
    },
    hidden: { opacity: 0, y: 50 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animate}
    >
      <NavLink to={project.link} target="_blank" rel="noreferrer">
        <div className={style.hovereffect}>
          <img src={project.image} alt="aj" />
          <div className={style.overlay}>
            <p className={style.project_name}>{project.title}</p>
            <div className={style.project_languages}>
              {project.languages.map((language, index) => (
                <p key={index}>{language}</p>
              ))}
            </div>
          </div>
        </div>
      </NavLink>
    </motion.div>
  );
}

export default Project;
