import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import Carousel from "react-material-ui-carousel";

export default function Projects() {
  const projects = [
    {
      image:
        "https://lh3.googleusercontent.com/pw/AL9nZEVvzxE_saG91v5XLagIE45BvxWEo9JhEq5cXDcw7DbxbFvwhbVjJmhA0HXkxFkZ-UBAMRAsVXrxAZm0XIsqU5ebGBVMZ_CaTiDQRgSZPuYT9u2vLQ=w2400",
      title: "Tooble",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae nesciunt, nostrum alias adipisci vitae, ex doloremque at consectetur possimus ducimus eos veniam assumenda quaerat eaque numquam laboriosam illo nihil.",
      languages: ["ReactJS", "Tailwind CSS", "FireBase"],
      gitLink: "https://github.com/bhargav-guggilapu/tooble",
      projectLink: "https://bhargav-guggilapu.github.io/tooble/",
    },
    {
      image:
        "https://lh3.googleusercontent.com/pw/AL9nZEVM_Jdvfs2qETNtfJVqFtExE9Ur7x01ILULMzg5GysUMPJy39H2VxloKIGzl1jP_QrPkZ3TyC8Icy9QVKpsGUO6HB4TL-ZsX88WDtEIJG4H0RKyXw=w2400",
      title: "LinkIn",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae nesciunt, nostrum alias adipisci vitae, ex doloremque at consectetur possimus ducimus eos veniam assumenda quaerat eaque numquam laboriosam illo nihil.",
      languages: ["ReactJS", "Material-UI", "FireBase"],
      gitLink: "https://github.com/bhargav-guggilapu/linkin",
      projectLink: "https://bhargav-guggilapu.github.io/linkin/",
    },
    {
      image:
        "https://lh3.googleusercontent.com/pw/AL9nZEWkWo-6r4ge6QlTUeZ23DYoVBwDWlAMZSqcldyHBl6l49qqWHMeYToU7E3Wop46WUBB99ml3o1DSLOZG4UFWW0cMlJb79PbGRP6rHV6LJnwKwMK8Q=w2400",
      title: "Movies List",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae nesciunt, nostrum alias adipisci vitae, ex doloremque at consectetur possimus ducimus eos veniam assumenda quaerat eaque numquam laboriosam illo nihil.",
      languages: ["HTML5", "CSS3", "Javascript"],
      gitLink: "https://github.com/bhargav-guggilapu/movies-list",
      projectLink: " https://bhargav-guggilapu.github.io/movies-list/",
    },
    {
      image:
        "https://lh3.googleusercontent.com/pw/AL9nZEVIULnLpHWEs1ucgqkfPKKMSXEPz5QQ0oQaO8NjFDALfNnxg-YHVF9z3g-rh2COCDxiL0LzBYCbqd9OMPE4zQDII9Pe-5dqJPelOXpS3k_Pd5BzMg=w2400",
      title: "Cart Catalog",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae nesciunt, nostrum alias adipisci vitae, ex doloremque at consectetur possimus ducimus eos veniam assumenda quaerat eaque numquam laboriosam illo nihil.",
      languages: ["AngularJS"],
      gitLink: "https://github.com/bhargav-guggilapu/cart-catalog",
      projectLink: "https://bhargav-guggilapu.github.io/cart-catalog/",
    },
    {
      image:
        "https://lh3.googleusercontent.com/pw/AL9nZEXwRvJG7_gPVLGY4edX56we4N5CMzxOwFMcrmGL5a0v4qeQYChHLLntxSrsK2YxSsynKJU5tVJrS_VE2CDmA3F-om0sVHJiTipBJcWKHRUpTh0tsw=w2400",
      title: "Omnifoods",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae nesciunt, nostrum alias adipisci vitae, ex doloremque at consectetur possimus ducimus eos veniam assumenda quaerat eaque numquam laboriosam illo nihil.",
      languages: ["HTML5", "CSS3", "Javascript"],
      gitLink: "https://github.com/bhargav-guggilapu/responsive-resturant-page",
      projectLink:
        "https://bhargav-guggilapu.github.io/responsive-resturant-page/",
    },

    {
      image:
        "https://lh3.googleusercontent.com/pw/AL9nZEWVOQDw6rYmsGq2CrAQlCzvAk3bFk91rYYsXJ5daL8YYptb-LudbkF3-N4DyDszv8oMbIcT8rg41er5CWeiAhQyiISUGg6aNTCWFJnR46YhXq4rYQ=w2400",
      title: "JT Foods",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt recusandae nesciunt, nostrum alias adipisci vitae, ex doloremque at consectetur possimus ducimus eos veniam assumenda quaerat eaque numquam laboriosam illo nihil.",
      languages: ["HTML5", "CSS3", "Javascript"],
      gitLink: "https://github.com/bhargav-guggilapu/resturant-page",
      projectLink: "https://bhargav-guggilapu.github.io/resturant-page/",
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
