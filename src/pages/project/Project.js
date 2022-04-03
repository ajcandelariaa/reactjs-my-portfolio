import React, { useEffect, useState } from "react";
import style from "./Project.module.css";
import { getProjects } from "../../helpers/Data";
import { useParams } from "react-router-dom";

function Project() {
  const [project, setProject] = useState([]);
  const { projectName } = useParams();

  useEffect(() => {
    const data = getProjects().filter(
      (project) => project.linkName === projectName
    );
    console.log(data);
    setProject(...data);
  }, []);
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${project.image})`,
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
            <div className={style.links_grid}>
              Github
            </div>
          </div>
        </div>
      </div>
      <div className={style.project_grid}>
        <div className={style.sidebar}></div>
        <div className={style.project_info}>a</div>
      </div>
    </div>
  );
}

export default Project;
