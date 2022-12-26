import { useEffect, useState } from "react";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import { useParams, useNavigate } from "react-router-dom";

function Router() {
  const [userData, setUserData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://custom-portfolio-a3d7e-default-rtdb.firebaseio.com/users/${id}.json`
      );
      const data = await res.json();
      if (!data) {
        alert('Please Check Your ID')
        return navigate("/-NK8IvCI_WNE_CDEJSrX");
      }
      setUserData(data);
      document.title = `${data.name}'s Portfolio`;
      document.getElementById("favicon").href = data.userImage;
    })();
  }, [id, navigate]);

  return (
    <>
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

export default Router;
