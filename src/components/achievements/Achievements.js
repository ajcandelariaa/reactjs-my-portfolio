import React from 'react'
import style from "./Achievements.module.css"
import certDatabase from "../../images/achievements/certDatabase.PNG";
import certJavascript from "../../images/achievements/certJavascript.PNG";

function Achievements() {
  return (
    <div className='achievements'>
      <div className={style.container}>
        <div className={style.wrapper}>
          <p className={style.heading}>Achievements</p>
          <div className={style.images_grid}>
            <img src={certDatabase} alt="certDatabase" />
            <img src={certJavascript} alt="certDatabase" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements