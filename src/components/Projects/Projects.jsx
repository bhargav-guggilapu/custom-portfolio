import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import Carousel from "react-material-ui-carousel";

export default function Projects({ userData }) {
  const projects = userData.projects?.map((project) => {
    return {
      image: project.image,
      title: project.name,
      description: project.description,
      languages: project.skills,
      gitLink: project.gitLink,
      projectLink: project.projectLink,
    };
  });

  return (
    <div className="projects">
      <div className="projects-bg-effect" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          padding: "100px 10% 0 10%",
          zIndex: "1",
        }}
      >
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "70px",
            letterSpacing: "5px",
          }}
        >
          Projects
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Carousel
            animation="slide"
            sx={{ width: "90vw" }}
            navButtonsAlwaysVisible={true}
            duration={500}
            indicators={false}
          >
            {projects?.map((project, i) => {
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    padding: "100px",
                    width: "100%",
                  }}
                >
                  <div className="project_left">
                    <img src={project.image} alt={project.title} />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <a
                        href={project.gitLink}
                        style={{ textDecoration: "none" }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button>GitHub Repo</button>
                      </a>
                      <a
                        href={project.projectLink}
                        style={{ textDecoration: "none" }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button>View Project</button>
                      </a>
                    </div>
                  </div>
                  <div className="project_right">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <div>
                      {project.languages.map((language, j) => {
                        return <span key={j}>{language}</span>;
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </motion.div>
      </div>
    </div>
  );
}
