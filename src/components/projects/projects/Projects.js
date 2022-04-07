import React from "react";
import style from "./Projects.module.css";
import { getProjects } from "../../../helpers/Data";
import Project from "../project/Project";

function Projects() {
  return (
    <div className="projects">
      <div className={style.container}>
        <p className={style.heading}>Projects</p>
        <div className={style.projects_grid}>
          {getProjects().map((project) => <Project project={project} key={project.id} />)}
        </div>
      </div>
    </div>
  );
}

export default Projects;
