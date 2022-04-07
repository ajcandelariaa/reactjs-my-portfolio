import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import About from "../components/about/about/About";
import Footer from "../components/footer/Footer";
import Introduction from "../components/introduction/Introduction";
import Navbar from "../components/navbar/Navbar";
import Projects from "../components/projects/projects/Projects";
import Achievements from "../components/achievements/achievements/Achievements";
import Contact from "../components/contact/Contact";

function Home() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div>
      <Helmet>
        <title>Aj Candelaria</title>
      </Helmet>

      <Navbar navbar={navbar} />
      <Introduction />
      <About />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
