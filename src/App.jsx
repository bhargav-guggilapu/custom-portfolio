import { useEffect } from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const userImage =
    "https://media-exp1.licdn.com/dms/image/C4D03AQGgPoO5VMRE1A/profile-displayphoto-shrink_400_400/0/1667887159324?e=1674086400&v=beta&t=oOaAnj_03MBRIumAmP_JT9IBQvzZbNU9DHLlvHrstn8";
  useEffect(() => {
    document.title = `${"Bhargav"}'s Portfolio`;
    document.getElementById("favicon").href = userImage;
  }, []);

  return (
    <>
      <NavBar />
      <div id="home">
        <Header url={userImage} />
      </div>
      <div id="experience"></div>
      <div id="skills"></div>
      <div id="projects"></div>
      <div id="contact"></div>
    </>
  );
}

export default App;
