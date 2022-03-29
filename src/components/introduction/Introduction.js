import React from "react";
import myImage from "../../images/aj2.png";
import style from "./Introduction.module.css";

function Introduction() {
  return (
    <div className={style.introduction_container}>
      <div className={style.introduction_wrapper}>
        <div>
          <p>Hello, I am</p>
          <h1>Aj</h1>
          <h1>Candelaria</h1>
          <p>A Junior Mobile Developer and Full-Stack Web Developer</p>

          <button>Download my Resume</button>
        </div>

        <div>
          <img src={myImage} alt="myImage" className={style.my_image} />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
