import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import style from "./Project.module.css";
import { getProjects } from "../../helpers/Data";
import { useNavigate, useParams } from "react-router-dom";
import Link from "react-scroll/modules/components/Link";

import scrolldown from "../../images/projects/scrolldown.gif";
import ProjectImage from "../../components/projects/ProjectImage";

function Project() {
  const [project, setProject] = useState([]);
  const [title, setTitle] = useState("Project");
  const { projectName } = useParams();
  const navigate = useNavigate();

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
        <div className={style.project_introduction}>
          <div>
            <p className={style.project_title}>{project.title}</p>
            <p className={style.project_desc}>{project.description}</p>
            <div className={style.links_flex}>
              {project.website === "" ? (
                ""
              ) : (
                <a href={project.website} target="_blank">
                  Live Demo
                </a>
              )}
              <a href={project.repository} target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
            <div className={style.project_scroll_down}>
              <Link
                to="bottom"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
              >
                <img src={scrolldown} alt="scrolldown" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.project_grid} bottom`}>
        <div className={style.sidebar}></div>
        <div className={style.project_info}>
          <div className={style.project_title}>
            <p className="text-xl uppercase border border-sideBarMarketplaceButtonsActive w-fit py-2 px-10">
              {project.title}
            </p>
          </div>
          <p className={style.project_about}>{project.about}</p>
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
