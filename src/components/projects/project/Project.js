import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Project.module.css";

function Project({ project }) {
  return (
    <div>
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
    </div>
  );
}

export default Project;
