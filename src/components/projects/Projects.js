import React from "react";
import style from "./Projects.module.css";
import { getProjects } from "../../helpers/Data";
import { NavLink } from "react-router-dom";

function Projects() {
  return (
    <div className="projects">
      <div className={style.container}>
        <p className={style.heading}>Projects</p>
        <div className={style.projects_grid}>
          {getProjects().map((project) => (
            <div className={style.project_container} key={project.id}>
              <NavLink to={project.link} target="_blank">
                <img src={project.image} alt="aj" />
              </NavLink>
              {/* <p className={style.project_name}>{project.name}</p> */}
              <div className={style.project_languages}>
                {project.languages.map((language, index) => (
                  <p key={index}>{language}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
