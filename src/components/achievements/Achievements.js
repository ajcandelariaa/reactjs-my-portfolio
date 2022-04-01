import React from 'react'
import style from "./Achievements.module.css"

function Achievements() {
  return (
    <div className='achievements'>
      <div className={style.container}>
        <div className={style.wrapper}>
          <p className={style.heading}>Achievements</p>
        </div>
      </div>
    </div>
  )
}

export default Achievements