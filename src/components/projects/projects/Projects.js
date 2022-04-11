import React, { useEffect } from "react";
import style from "./Projects.module.css";
import { getProjects } from "../../../helpers/Data";
import Project from "../project/Project";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Projects() {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  const animate = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
    hidden: { opacity: 0, y: 50 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="projects">
      <div className={style.container}>
        <motion.p
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={animate}
          className={style.heading}
        >
          Projects
        </motion.p>
        <div className={style.projects_grid}>
          {getProjects().map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
