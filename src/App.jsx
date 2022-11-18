import { useEffect } from "react";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import { motion, useScroll } from "framer-motion";
import Experience from "./components/Experience/Experience";

function App() {
  const userImage =
    "https://media-exp1.licdn.com/dms/image/C4D03AQGgPoO5VMRE1A/profile-displayphoto-shrink_400_400/0/1667887159324?e=1674086400&v=beta&t=oOaAnj_03MBRIumAmP_JT9IBQvzZbNU9DHLlvHrstn8";
  useEffect(() => {
    document.title = `${"Bhargav"}'s Portfolio`;
    document.getElementById("favicon").href = userImage;
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
        }}
      />
      <NavBar />
      <div id="home">
        <Header url={userImage} />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects"></div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
