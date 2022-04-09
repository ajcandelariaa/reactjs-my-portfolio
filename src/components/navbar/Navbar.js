import React, { useState } from "react";
import Link from "react-scroll/modules/components/Link";
import style from "./Navbar.module.css";
import logo from "../../images/navbar/logo.jpg";
import { motion } from "framer-motion";

function Navbar({ navbar, mobileSize }) {
  const [hamburger, setHabmurger] = useState(false)
  const fade = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const hamburgerClicked = () =>{
    if(hamburger) {
      setHabmurger(false)
      document.body.style.overflow = 'unset';
    } else {
      setHabmurger(true)
      document.body.style.overflow = 'hidden';
    }
  }
  return (
    <div>
      {mobileSize ? <>
      
        <nav className={style.mob_nav}>
        <div className={style.mob_nav_container}>
          <div className={style.mob_nav_logo}>
            <img src={logo} />
          </div>
          <div className={`${style.mob_nav_link} ${hamburger ? style.is_active : ''}`}>
            <Link to="introduction" spy={true}smooth={true}offset={-90}duration={500}>Home</Link>
            <Link to="about" spy={true} smooth={true} offset={-90} duration={500}>About</Link>
            <Link to="projects" spy={true} smooth={true} offset={-90} duration={500}> Projects</Link>
            <Link to="achievements"spy={true} smooth={true} offset={-90} duration={500}>Achievements</Link>
            <Link to="contact" spy={true} smooth={true} offset={-90} duration={500}>Contact</Link>
          </div>
          <button className={`${style.mob_nav_hamburger} ${hamburger ? style.is_active : ''}`} onClick={hamburgerClicked}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      </> : <>
        <nav
        className={`${style.container} ${
          navbar ? style.container_active : style.container
        }`}
      >
        <div className={style.wrapper}>
          <div className={style.links}>
            <motion.div
              variants={fade}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.1 }}
            >
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                About
              </Link>
            </motion.div>

            <motion.div
              variants={fade}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                Projects
              </Link>
            </motion.div>

            <motion.div
              variants={fade}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Link
                to="introduction"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                <img src={logo} alt="logo" className={style.image_logo} />
              </Link>
            </motion.div>

            <motion.div
              variants={fade}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Link
                to="achievements"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                Achievements
              </Link>
            </motion.div>

            <motion.div
              variants={fade}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                Contact
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>
      </>
      }
    </div>
  );
}

export default Navbar;
