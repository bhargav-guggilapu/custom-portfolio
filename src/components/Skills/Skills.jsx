import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      name: "html",
      img_url: "https://img.icons8.com/color/512/html-5.png",
      prof: "90",
    },
    {
      name: "css",
      img_url: "https://img.icons8.com/color/512/css3.png",
      prof: "90",
    },
    {
      name: "javascript",
      img_url: "https://img.icons8.com/color/512/javascript.png",
      prof: "80",
    },
    {
      name: "sass",
      img_url: "https://img.icons8.com/color/512/sass.png",
      prof: "50",
    },
    {
      name: "bootstrap",
      img_url: "https://img.icons8.com/color/512/bootstrap.png",
      prof: "60",
    },
    {
      name: "material-ui",
      img_url: "https://img.icons8.com/color/512/material-ui.png",
      prof: "50",
    },
    {
      name: "react",
      img_url: "https://img.icons8.com/office/512/react.png",
      prof: "80",
    },
    {
      name: "angular",
      img_url: "https://img.icons8.com/color/512/angularjs.png",
      prof: "80",
    },
    {
      name: "typescript",
      img_url: "https://img.icons8.com/color/512/typescript.png",
      prof: "60",
    },

    {
      name: "python",
      img_url: "https://img.icons8.com/color/512/python.png",
      prof: "60",
    },
    {
      name: "git",
      img_url: "https://img.icons8.com/color/512/git.png",
      prof: "60",
    },
    {
      name: "firebase",
      img_url: "https://img.icons8.com/color/512/firebase.png",
      prof: "50",
    },
    {
      name: "jenkins",
      img_url: "https://img.icons8.com/color/512/jenkins.png",
      prof: "40",
    },
    {
      name: "keycloak",
      img_url:
        "https://www.keycloak.org/resources/images/keycloak_icon_512px.svg",
      prof: "40",
    },
  ];
  return (
    <div className="skills">
      <div className="skills-bg-effect" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding: "100px 10% 0 10%",
          color: "white",
          zIndex: "1",
        }}
      >
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "70px",
            marginBottom: "50px",
            letterSpacing: "5px",
          }}
        >
          Skills
        </motion.h1>
        <div className="skill-set">
          {skills.map((skill, i) => {
            return (
              <div className="skill" key={i}>
                <motion.img
                  initial={{ x: i % 2 === 0 ? -140 : 140 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                  src={skill.img_url}
                  alt={skill.name}
                />
                <div>
                  <p>{skill.name.toUpperCase()}</p>
                  <p>{skill.prof}%</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
