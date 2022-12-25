import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

export default function Skills({ userData }) {
  const skills = userData.skills?.map((skill) => {
    const prof = skill.substring(skill.indexOf("-") + 1).trim();
    const name = skill.substring(0, skill.indexOf("-")).trim();
    const img_url = `https://img.icons8.com/color/512/${name.replaceAll(
      " ",
      "-"
    )}.png`;

    return {
      name,
      img_url,
      prof,
    };
  });

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
          {skills?.map((skill, i) => {
            return (
              <div className="skill" key={i}>
                <motion.img
                  id={"skillImg" + i}
                  initial={{ x: i % 2 === 0 ? -140 : 140 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                  src={skill.img_url}
                  onError={() => {
                    document.getElementById("skillImg" + i).style.display =
                      "none";
                    document.getElementById("skillText" + i).style.display =
                      "block";
                  }}
                  alt={skill.name}
                />
                <motion.span
                  initial={{ x: i % 2 === 0 ? -140 : 140 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                  id={"skillText" + i}
                  className="no-image-text"
                >
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {skill.name}
                  </span>
                </motion.span>
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
