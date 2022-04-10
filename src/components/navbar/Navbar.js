import React, { useState } from "react";
import Link from "react-scroll/modules/components/Link";
import style from "./Navbar.module.css";
import logo from "../../images/navbar/logo.jpg";
import { AnimatePresence, motion } from "framer-motion";

function Navbar({ navbar, mobileSize }) {
  const [hamburger, setHabmurger] = useState(false);
  const fade = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeL = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeR = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const hamburgerClicked = () => {
    if (hamburger) {
      setHabmurger(false);
      document.body.style.overflow = "unset";
    } else {
      setHabmurger(true);
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <div>
      <AnimatePresence>
        {mobileSize ? (
          <>
            <nav className={`${style.mob_nav} ${navbar && style.active}`}>
              <div className={style.mob_nav_container}>
                <motion.div
                  variants={fadeL}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  className={style.mob_nav_logo}
                >
                  <img src={logo} />
                </motion.div>
                <div
                  className={`${style.mob_nav_link} ${
                    hamburger ? style.is_active : ""
                  } ${navbar && style.active}`}
                >
                  <Link
                    to="introduction"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    onClick={hamburgerClicked}
                  >
                    Home
                  </Link>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    onClick={hamburgerClicked}
                  >
                    About
                  </Link>
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    onClick={hamburgerClicked}
                  >
                    {" "}
                    Projects
                  </Link>
                  <Link
                    to="achievements"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    onClick={hamburgerClicked}
                  >
                    Achievements
                  </Link>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    onClick={hamburgerClicked}
                  >
                    Contact
                  </Link>
                </div>
                <motion.button
                  variants={fadeR}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  className={`${style.mob_nav_hamburger} ${
                    hamburger ? style.is_active : ""
                  }`}
                  onClick={hamburgerClicked}
                >
                  <span className={`${navbar && style.active}`}></span>
                  <span className={`${navbar && style.active}`}></span>
                  <span className={`${navbar && style.active}`}></span>
                </motion.button>
              </div>
            </nav>
          </>
        ) : (
          <>
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
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
