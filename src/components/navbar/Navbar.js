import React from 'react'
import Link from 'react-scroll/modules/components/Link'
import style from "./Navbar.module.css";
import logo from "../../images/navbar/logo.jpg";

function Navbar() {
  return (
    <nav className={style.container}>
      <div className={style.links}>
        <Link to="about" spy={true} smooth={true} offset={-90} duration={500}>About</Link>
        <Link to="projects" spy={true} smooth={true} offset={-90} duration={500}>Projects</Link>
        <Link to="introduction" spy={true} smooth={true} offset={-90} duration={500}>
          <img src={logo} alt="logo" className={style.image_logo} />
        </Link>
        <Link to="achievements" spy={true} smooth={true} offset={-90} duration={500}>Achievements</Link>
        <Link to="contact" spy={true} smooth={true} offset={-90} duration={500}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar