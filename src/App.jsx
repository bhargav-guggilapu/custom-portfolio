import { useEffect, useState } from "react";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import { motion, useScroll } from "framer-motion";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://custom-portfolio-a3d7e-default-rtdb.firebaseio.com/users/${"-NK8IvCI_WNE_CDEJSrX"}.json`
      );
      const data = await res.json();
      setUserData(data);
      document.title = `${data.name}'s Portfolio`;
      document.getElementById("favicon").href = data.userImage;
    })();
  }, []);
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          bottom: "0",
          left: "0",
          right: "0",
          height: "5px",
          background: "#2234ae",
          transformOrigin: "0%",
          zIndex: "9999",
        }}
      />
      <NavBar userData={userData} />
      <div id="home">
        <Header userData={userData} />
      </div>
      <div id="experience">
        <Experience userData={userData} />
      </div>
      <div id="skills">
        <Skills userData={userData} />
      </div>
      <div id="projects">
        <Projects userData={userData} />
      </div>
      <div id="contact">
        <Contact userData={userData} />
      </div>
    </>
  );
}

export default App;
