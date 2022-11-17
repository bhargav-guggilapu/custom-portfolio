import React from "react";
import "./Skills.css";

export default function Skills() {
  const skills = [
    {
      name: "html",
      img_url: "https://img.icons8.com/color/512/html-5.png",
    },
    {
      name: "css",
      img_url: "https://img.icons8.com/color/512/css3.png",
    },
    {
      name: "javascript",
      img_url: "https://img.icons8.com/color/512/javascript.png",
    },
    {
      name: "sass",
      img_url: "https://img.icons8.com/color/512/sass.png",
    },
    {
      name: "bootstrap",
      img_url: "https://img.icons8.com/color/512/bootstrap.png",
    },
    {
      name: "material-ui",
      img_url: "https://img.icons8.com/color/512/material-ui.png",
    },
    {
      name: "react",
      img_url: "https://img.icons8.com/office/512/react.png",
    },
    {
      name: "angular",
      img_url: "https://img.icons8.com/color/512/angularjs.png",
    },
    {
      name: "typescript",
      img_url: "https://img.icons8.com/color/512/typescript.png",
    },

    {
      name: "python",
      img_url: "https://img.icons8.com/color/512/python.png",
    },
    {
      name: "git",
      img_url: "https://img.icons8.com/color/512/git.png",
    },
    {
      name: "firebase",
      img_url: "https://img.icons8.com/color/512/firebase.png",
    },
    {
      name: "jenkins",
      img_url: "https://img.icons8.com/color/512/jenkins.png",
    },
    {
      name: "keycloak",
      img_url:
        "https://www.keycloak.org/resources/images/keycloak_icon_512px.svg",
    },
  ];
  return (
    <div className="skills">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding: "100px 10% 0 10%",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "70px",
            marginBottom: "70px",
            letterSpacing: "5px",
          }}
        >
          Skills
        </h1>
        <div className="skill-set">
          {skills.map((skill) => {
            return (
              <div className="skill">
                <img src={skill.img_url} alt={skill.name} />
                <div>
                  <p>{skill.name.toUpperCase()}</p>
                  <p>100%</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
