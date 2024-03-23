import React, { useState, useEffect } from "react";
import AboutDesktopView from "../desktop-view/AboutDesktopView";
import AboutMobileView from "../mobile-view/AboutMobileView";

function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 950);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 950);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? <AboutMobileView /> : <AboutDesktopView />}
    </>
  );
}

export default About;
