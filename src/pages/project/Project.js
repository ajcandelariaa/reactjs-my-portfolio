import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

import style from "./Project.module.css";
import { getProjects } from "../../helpers/Data";
import Link from "react-scroll/modules/components/Link";
import scrolldown from "../../images/projects/scrolldown.gif";
import ProjectImage from "../../components/projects/projectImage/ProjectImage";
import { useInView } from "react-intersection-observer";

function Project() {
  const [project, setProject] = useState([]);
  const [title, setTitle] = useState("Project");
  const { projectName } = useParams();
  const navigate = useNavigate();
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const fade = {
    hidden: { opacity: 0, y: 1100 },
    visible: { opacity: 1, y: 0 },
  };

  const animate = {
    visible: { opacity: 1},
    hidden: { opacity: 0},
  };
  

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inView2) {
      controls2.start("visible");
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start("visible");
    }
  }, [controls3, inView3]);

  useEffect(() => {
    const data = getProjects().filter(
      (project) => project.linkName === projectName
    );

    if (data.length === 0) {
      navigate(`/projects-${projectName}`, { replace: true });
    }

    setTitle(`Project | ${data[0].title}`);
    setProject(...data);
  }, []);
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90)), url(${project.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className={style.project_container}>
          <div className={style.project_introduction}>
            <div>
              <motion.p
                variants={fade}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 0.1 }}
                className={style.project_title}
              >
                {project.title}
              </motion.p>
              <motion.p
                variants={fade}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 0.2 }}
                className={style.project_desc}
              >
                {project.description}
              </motion.p>
              <motion.div
                variants={fade}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 0.3 }}
                className={style.links_flex}
              >
                {project.website === "" ? (
                  ""
                ) : (
                  <a href={project.website} target="_blank" rel="noreferrer">
                    <i class="fa-solid fa-globe"></i>
                  </a>
                )}
                <a href={project.repository} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
              </motion.div>
              <motion.div
                variants={fade}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 0.4 }}
                className={style.project_scroll_down}
              >
                <Link
                  to="bottom"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                >
                  <img src={scrolldown} alt="scrolldown" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.project_grid} bottom`}>
        <div className={style.sidebar}></div>
        <div className={style.project_info}>
          <motion.div 
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={animate}
              transition={{ duration: 0.5, delay: 0.2 }} className={style.project_title}>
            <p className="text-xl uppercase border border-sideBarMarketplaceButtonsActive w-fit py-2 px-10">
              {project.title}
            </p>
          </motion.div>
          <motion.p 
              ref={ref2}
              animate={controls2}
              initial="hidden"
              variants={animate}
              transition={{ duration: 0.5, delay: 0.3 }} className={style.project_about}>{project.about}</motion.p>
          <motion.ul 
              ref={ref3}
              animate={controls3}
              initial="hidden"
              variants={animate}
              transition={{ duration: 0.5, delay: 0.3 }} className={style.project_features}>
            {project.features && (
              <>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </>
            )}
          </motion.ul>
          <div className={style.project_images}>
            {project.screenshots && (
              <>
                {project.screenshots.map((screenshot, index) => (
                  <ProjectImage screenshot={screenshot} key={index} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
