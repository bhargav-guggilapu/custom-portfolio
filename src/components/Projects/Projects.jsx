import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import Carousel from "react-material-ui-carousel";

export default function Projects() {
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80",
      title: "Tooble",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae nesciunt, nostrum alias adipisci vitae, ex doloremque at consectetur possimus ducimus eos veniam assumenda quaerat eaque numquam laboriosam illo nihil.",
      languages: ["ReactJS", "Material-UI", "FireBase"],
      gitLink: "",
      projectLink: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80",
      title: "Tooble",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae nesciunt, nostrum alias adipisci vitae, ex doloremque at consectetur possimus ducimus eos veniam assumenda quaerat eaque numquam laboriosam illo nihil.",
      languages: ["ReactJS", "Material-UI", "FireBase"],
      gitLink: "",
      projectLink: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80",
      title: "Tooble",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae nesciunt, nostrum alias adipisci vitae, ex doloremque at consectetur possimus ducimus eos veniam assumenda quaerat eaque numquam laboriosam illo nihil.",
      languages: ["ReactJS", "Material-UI", "FireBase"],
      gitLink: "",
      projectLink: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80",
      title: "Tooble",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae nesciunt, nostrum alias adipisci vitae, ex doloremque at consectetur possimus ducimus eos veniam assumenda quaerat eaque numquam laboriosam illo nihil.",
      languages: ["ReactJS", "Material-UI", "FireBase"],
      gitLink: "",
      projectLink: "",
    },
  ];

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
            {projects.map((project, i) => {
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
                      {project.languages.map((language) => {
                        return <span>{language}</span>;
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
