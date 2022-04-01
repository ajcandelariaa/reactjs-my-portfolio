import React from "react";
import style from "./Contact.module.css";

function Contact() {
  return (
    <div className="contact">
      <div className={style.container}>
        <p className={style.heading}>Contact Me</p>
        <form>
          <div className={style.form_inputs}>
            <input type="text" className={style.input} placeholder="Name" />
            <input type="text" className={style.input} placeholder="Email Address" />
            <input type="text" className={style.input} placeholder="Subject" />
            <textarea className={style.input} placeholder="Your Message" rows="8"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
