import React from 'react'
import style from "./AboutHobbies.module.css";

function AboutHobbies() {
  return (
    <div className={style.hobbies__grid}>
      <p><i className="fa-solid fa-basketball"></i>Basketball</p>
      <p><i className="fa-solid fa-fish"></i>Fishing</p>
      <p><i className="fa-solid fa-tent"></i>Camping</p>
      <p><i className="fa-solid fa-guitar"></i>Playing Guitar</p>
      <p><i className="fa-solid fa-basketball"></i>Playing Online Games</p>
      <p><i className="fa-solid fa-clapperboard"></i>Watching Movies & Anime</p>
    </div>
  )
}

export default AboutHobbies