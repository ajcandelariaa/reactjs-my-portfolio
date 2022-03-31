import React from 'react'
import Link from 'react-scroll/modules/components/Link';
import style from "./Footer.module.css";
import gmail from "../../images/footer/gmail.png";
import facebook from "../../images/footer/facebook.png";
import github from "../../images/footer/github.png";
import linkedin from "../../images/footer/linkedin.png";

function Footer() {
  return (
    <div className={style.info}>
      <div className={style.social_media_icons}>
        <a href='mailto:ajajcandelaria@gmail.com' target="_blank" rel='noreferrer'><img src={gmail} alt='icon'/></a>
        <a href='https://www.facebook.com/ajcandelariaa/' target="_blank" rel='noreferrer'><img src={facebook} alt='icon'/></a>
        <a href='https://github.com/ajcandelariaa' target="_blank" rel='noreferrer'><img src={github} alt='icon'/></a>
        <a href='https://www.linkedin.com/in/ajcandelariaa/' target="_blank" rel='noreferrer'><img src={linkedin} alt='icon'/></a>
      </div>

      <div className={style.links}>
        <Link to="introduction" spy={true} smooth={true} offset={-90} duration={500}>Home</Link>
        <Link to="about" spy={true} smooth={true} offset={-90} duration={500}>About</Link>
        <Link to="projects" spy={true} smooth={true} offset={-90} duration={500}>Projects</Link>
        <Link to="achievements" spy={true} smooth={true} offset={-90} duration={500}>Achievements</Link>
        <Link to="contact" spy={true} smooth={true} offset={-90} duration={500}>Contact</Link>
      </div>

      <p>Copyright © 2022 - Aj Candelaria</p>
    </div>
  )
}

export default Footer