import React from 'react'
import Link from 'react-scroll/modules/components/Link'
import style from "./Navbar.module.css";
import logo from "../../images/logo.jpg";

function Navbar() {
  return (
    <nav className={style.nav_container}>
      <div className={style.nav_wrapper}>
        <Link to="introduction" spy={true} smooth={true} offset={-90} duration={500}>
          <img src={logo} alt="logo" className={style.image_logo} />
        </Link>
        <div className={style.links}>
          <Link to="about" spy={true} smooth={true} offset={-90} duration={500}>About</Link>
          <Link to="projects" spy={true} smooth={true} offset={-90} duration={500}>Projects</Link>
          <Link to="achievements" spy={true} smooth={true} offset={-90} duration={500}>Achievements</Link>
          <Link to="contact" spy={true} smooth={true} offset={-90} duration={500}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar