import React from "react";
import style from "./Achievements.module.css";
import { getAchievements } from "../../helpers/Data";
import Achievement from "./Achievement";

function Achievements() {
  return (
    <div className="achievements">
      <div className={style.container}>
        <div className={style.wrapper}>
          <p className={style.heading}>Achievements</p>
          <div className={style.images_grid}>
            {getAchievements().map((achievement) => (
              <Achievement achievement={achievement} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
