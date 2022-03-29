import React from "react";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import Introduction from "../components/introduction/Introduction";
import Navbar from "../components/navbar/Navbar";
import Projects from "../components/projects/Projects";
import Achievements from "../components/achievements/Achievements";
import Contact from "../components/contact/Contact";

function Home() {
  return (
    <div>
      <Navbar />
      <Introduction />
      {/* <About />
      <Projects />
      <Achievements />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default Home;
