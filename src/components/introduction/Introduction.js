import React from "react";
import myImage from "../../images/aj2.png";
import style from "./Introduction.module.css";

function Introduction() {
  return (
    <div className={`${style.container} introduction`}>
      <div className={style.image_container}>
        <img src={myImage} alt="myImage" className={style.my_image} />
      </div>
      <div className={style.info}>
        <p>Hello, I am</p>
        <h1>Aj</h1>
        <h1>Candelaria</h1>
        <p>A Junior Mobile Developer and Full-Stack Web Developer</p>

        <button>Download my Resume</button>
      </div>
    </div>
  );
}

export default Introduction;
