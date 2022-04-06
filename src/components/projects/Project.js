import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Project.module.css";

function Project({ project }) {
  return (
    <div className={style.project_container}>
      <NavLink to={project.link} target="_blank" rel="noreferrer">
        <img src={project.image} alt="aj" />
      </NavLink>
      <div className={style.project_languages}>
        {project.languages.map((language, index) => (
          <p key={index}>{language}</p>
        ))}
      </div>
    </div>
  );
}

export default Project;
