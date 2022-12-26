import React, { useState, useRef } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import DescriptionIcon from "@mui/icons-material/Description";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function NavBar({ userData }) {
  const [scrolled, setScrolled] = useState(false);
  const [designations, setDesignations] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [works, setWorks] = useState([]);
  const [educations, setEducations] = useState([]);
  const [open, setOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const gitRef = useRef();
  const linkedInRef = useRef();
  const facebookRef = useRef();
  const instagramRef = useRef();
  const resumeRef = useRef();
  const about = useRef();
  const userImage = useRef();
  const designation = useRef();
  const skill = useRef();
  const projectSkill = useRef();

  const types = [
    {
      types: designations,
      type: designation,
      setType: setDesignations,
      text: "Designation",
    },
    {
      types: skills,
      type: skill,
      setType: setSkills,
      text: "Skill([skill] - [%])",
    },
  ];

  const handleCreate = async () => {
    setIsSaving(true);
    if (
      nameRef.current.value &&
      emailRef.current.value &&
      mobileRef.current.value &&
      gitRef.current.value &&
      linkedInRef.current.value &&
      facebookRef.current.value &&
      instagramRef.current.value &&
      resumeRef.current.value &&
      about.current.value &&
      userImage.current.value &&
      designations.length > 0 &&
      skills.length > 0
    ) {
      const res = await fetch(
        "https://custom-portfolio-a3d7e-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          body: JSON.stringify({
            name: nameRef.current.value,
            email: emailRef.current.value,
            mobile: mobileRef.current.value,
            git: gitRef.current.value,
            linkedIn: linkedInRef.current.value,
            facebook: facebookRef.current.value,
            instagram: instagramRef.current.value,
            resume: resumeRef.current.value,
            about: about.current.value,
            userImage: userImage.current.value,
            designations: designations,
            skills: skills,
            projects: projects,
            works: works,
            educations: educations,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setOpen(false);
      handleClose();
      alert(
        `Checkout Your Portfolio - https://bhargav-guggilapu.github.io/custom-portfolio/#/${data.name}`
      );
      return navigate(`/${data.name}`);
    }
  };

  const handleClose = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    mobileRef.current.value = "";
    gitRef.current.value = "";
    linkedInRef.current.value = "";
    facebookRef.current.value = "";
    instagramRef.current.value = "";
    resumeRef.current.value = "";
    about.current.value = "";
    userImage.current.value = "";
    setDesignations([]);
    setSkills([]);
    setProjects([]);
    setWorks([]);
    setEducations([]);
    setOpen(false);
    setIsSaving(false);
  };

  const handleDelete = (newData, setType) => () => {
    setType((chips) => chips.filter((chip) => chip !== newData));
  };

  const handleKeyDown = (event, setType, type) => {
    if (event.key === "Enter" && type.current.value) {
      setType((chip) => [...chip, type.current.value]);
      type.current.value = "";
    }
  };

  const handleDeleteProject = (newData, i) => () => {
    const data = [...projects];
    data[i].skills = data[i].skills.filter((chip) => chip !== newData);
    setProjects(data);
  };

  const handleKeyDownProject = (event, i, projectSkill) => {
    if (event.key === "Enter" && projectSkill.current.value) {
      const data = [...projects];
      data[i].skills.push(projectSkill.current.value);
      setProjects(data);
      projectSkill.current.value = "";
    }
  };

  const handleChange = (onChangeValue, i, field, givenData, setGivenData) => {
    const data = [...givenData];
    data[i][field] = onChangeValue.target.value;
    setGivenData(data);
  };

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip
      {...props}
      arrow
      TransitionComponent={Zoom}
      classes={{ popper: className }}
    />
  ))(() => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: !scrolled ? "#2234ae" : "white",
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: !scrolled ? "#2234ae" : "white",
      color: !scrolled ? "white" : "#2234ae",
    },
  }));

  window.addEventListener("scroll", () => {
    window.scrollY > 70 ? setScrolled(true) : setScrolled(false);
  });

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`navbar ${scrolled ? "active" : ""}`}
    >
      <button
        className={`navbar_button ${scrolled ? "active" : ""}`}
        onClick={() => setOpen(true)}
      >
        Want to Customize?
      </button>
      <div className="navbar_links">
        <div className="navbar_link">
          <Link to={"home"} spy={true} smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </div>
        <div className="navbar_link">
          <Link
            to={"experience"}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Experience
          </Link>
        </div>
        <div className="navbar_link">
          <Link
            to={"skills"}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Skills
          </Link>
        </div>
        <div className="navbar_link">
          <Link
            to={"projects"}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Projects
          </Link>
        </div>
        <div className="navbar_link">
          <Link
            to={"contact"}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact me
          </Link>
        </div>
      </div>
      <div className="navbar_icons">
        <a href={userData.git} target="_blank" rel="noreferrer">
          <BootstrapTooltip title="GitHub">
            <GitHubIcon
              className={`navbar_icon ${scrolled ? "active" : ""}`}
              fontSize="large"
            />
          </BootstrapTooltip>
        </a>
        <a href={userData.linkedIn} target="_blank" rel="noreferrer">
          <BootstrapTooltip title="LinkedIn">
            <LinkedInIcon
              className={`navbar_icon ${scrolled ? "active" : ""}`}
              fontSize="large"
            />
          </BootstrapTooltip>
        </a>
        <a href={userData.facebook} target="_blank" rel="noreferrer">
          <BootstrapTooltip title="Facebook">
            <FacebookIcon
              className={`navbar_icon ${scrolled ? "active" : ""}`}
              fontSize="large"
            />
          </BootstrapTooltip>
        </a>
        <a href={userData.instagram} target="_blank" rel="noreferrer">
          <BootstrapTooltip title="Instagram">
            <InstagramIcon
              className={`navbar_icon ${scrolled ? "active" : ""}`}
              fontSize="large"
            />
          </BootstrapTooltip>
        </a>
        <a href={userData.resume} target="_blank" rel="noreferrer">
          <BootstrapTooltip title="Resume">
            <DescriptionIcon
              className={`navbar_icon ${scrolled ? "active" : ""}`}
              fontSize="large"
            />
          </BootstrapTooltip>
        </a>
      </div>

      <Dialog open={open} scroll={"paper"} fullWidth maxWidth="large">
        <DialogTitle style={{ color: "#2234ae", textAlign: "center" }}>
          Fill In The Data
        </DialogTitle>
        <DialogContent dividers>
          <div className="input-fields">
            <TextField
              label="Name*"
              error={isSaving && !nameRef.current?.value}
              style={{ minWidth: "40%" }}
              inputRef={nameRef}
            />
            <TextField
              label="Email*"
              error={isSaving && !emailRef.current?.value}
              style={{ minWidth: "25%" }}
              inputRef={emailRef}
            />
            <TextField
              label="Mobile*"
              error={isSaving && !mobileRef.current?.value}
              style={{ minWidth: "25%" }}
              inputRef={mobileRef}
            />
            <TextField
              label="Git*"
              error={isSaving && !gitRef.current?.value}
              style={{ minWidth: "17%" }}
              inputRef={gitRef}
            />
            <TextField
              label="LinkedIn*"
              error={isSaving && !linkedInRef.current?.value}
              style={{ minWidth: "17%" }}
              inputRef={linkedInRef}
            />
            <TextField
              label="Facebook*"
              error={isSaving && !facebookRef.current?.value}
              style={{ minWidth: "17%" }}
              inputRef={facebookRef}
            />
            <TextField
              label="Instagram*"
              error={isSaving && !instagramRef.current?.value}
              style={{ minWidth: "17%" }}
              inputRef={instagramRef}
            />
            <TextField
              label="Resume Link*"
              error={isSaving && !resumeRef.current?.value}
              style={{ minWidth: "17%" }}
              inputRef={resumeRef}
            />
            <TextField
              label="About Yourself*"
              multiline
              maxRows={5}
              error={isSaving && !about.current?.value}
              style={{ minWidth: "50%" }}
              inputRef={about}
            />
            <TextField
              label="User Image Link*"
              error={isSaving && !userImage.current?.value}
              style={{ minWidth: "17%" }}
              inputRef={userImage}
            />
            <div style={{ width: "95%" }}>
              {types.map((type, i) => {
                return (
                  <Paper
                    key={i}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      flexWrap: "wrap",
                      listStyle: "none",
                      boxShadow: "none",
                      border: `1px solid ${
                        isSaving && type.types.length === 0
                          ? "#D84544"
                          : "#E1E1E1"
                      }`,
                      p: 1,
                      minHeight: "60px",
                      mb: 4,
                      mt: 2,
                    }}
                    component="ul"
                  >
                    {type.types.map((data, j) => {
                      return (
                        <ListItem key={j}>
                          <Chip
                            label={data}
                            onDelete={handleDelete(data, type.setType)}
                          />
                        </ListItem>
                      );
                    })}
                    <input
                      style={{
                        outline: "none",
                        border: "none",
                        width: "150px",
                      }}
                      ref={type.type}
                      onKeyDown={(event) =>
                        handleKeyDown(event, type.setType, type.type)
                      }
                      placeholder={`Enter ${type.text}*`}
                    />
                  </Paper>
                );
              })}
            </div>

            <Divider />

            <h2 className="nav_header">
              Project Details
              <AddCircleIcon
                className="nav_header_icon"
                onClick={() =>
                  setProjects((data) => [
                    ...data,
                    {
                      name: "",
                      image: "",
                      projectLink: "",
                      gitLink: "",
                      description: "",
                      skills: [],
                    },
                  ])
                }
              />
            </h2>
            {projects.map((project, i) => {
              return (
                <div
                  className="project_input"
                  key={i}
                  style={{ marginBottom: "50px" }}
                >
                  <TextField
                    label={`Project Name ${i + 1}*`}
                    error={isSaving && !project.name}
                    style={{ minWidth: "16%" }}
                    value={project.name}
                    onChange={(e) =>
                      handleChange(e, i, "name", projects, setProjects)
                    }
                  />
                  <TextField
                    label={`Project Image ${i + 1}*`}
                    error={isSaving && !project.image}
                    style={{ minWidth: "24%" }}
                    value={project.image}
                    onChange={(e) =>
                      handleChange(e, i, "image", projects, setProjects)
                    }
                  />
                  <TextField
                    label={`Project Link ${i + 1}*`}
                    error={isSaving && !project.projectLink}
                    style={{ minWidth: "24%" }}
                    value={project.projectLink}
                    onChange={(e) =>
                      handleChange(e, i, "projectLink", projects, setProjects)
                    }
                  />
                  <TextField
                    label={`Git Link ${i + 1}*`}
                    error={isSaving && !project.gitLink}
                    style={{ minWidth: "24%" }}
                    value={project.gitLink}
                    onChange={(e) =>
                      handleChange(e, i, "gitLink", projects, setProjects)
                    }
                  />
                  <TextField
                    label={`Project Description ${i + 1}*`}
                    error={isSaving && !project.gitLink}
                    multiline
                    style={{ minWidth: "40%" }}
                    value={project.description}
                    onChange={(e) =>
                      handleChange(e, i, "description", projects, setProjects)
                    }
                    maxRows={5}
                  />
                  <div style={{ width: "95%" }}>
                    <Paper
                      key={i}
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexWrap: "wrap",
                        listStyle: "none",
                        boxShadow: "none",
                        border: `1px solid ${
                          isSaving && project.skills.length === 0
                            ? "#D84544"
                            : "#E1E1E1"
                        }`,
                        p: 1,
                        height: "60px",
                        mb: 4,
                        mt: 2,
                      }}
                      component="ul"
                    >
                      {project.skills.map((data, j) => {
                        return (
                          <ListItem key={j}>
                            <Chip
                              label={data}
                              onDelete={handleDeleteProject(data, i)}
                            />
                          </ListItem>
                        );
                      })}
                      <input
                        style={{ outline: "none", border: "none" }}
                        ref={projectSkill}
                        onKeyDown={(event) =>
                          handleKeyDownProject(event, i, projectSkill)
                        }
                        placeholder={`Enter Skill ${i + 1}*`}
                      />
                    </Paper>
                  </div>
                </div>
              );
            })}

            <Divider />

            <h2 className="nav_header">
              Work Details
              <AddCircleIcon
                className="nav_header_icon"
                onClick={() =>
                  setWorks((data) => [
                    ...data,
                    {
                      designation: "",
                      workedOn: "",
                      startDate: "",
                      endDate: "",
                      location: "",
                      company: "",
                    },
                  ])
                }
              />
            </h2>
            {works.map((work, i) => {
              return (
                <div
                  className="project_input"
                  key={i}
                  style={{ marginBottom: "50px" }}
                >
                  <TextField
                    label={`Designation ${i + 1}*`}
                    error={isSaving && !work.designation}
                    style={{ minWidth: "30%" }}
                    value={work.designation}
                    onChange={(e) =>
                      handleChange(e, i, "designation", works, setWorks)
                    }
                  />
                  <TextField
                    label={`Worked On ${i + 1}*`}
                    error={isSaving && !work.workedOn}
                    style={{ minWidth: "30%" }}
                    value={work.workedOn}
                    onChange={(e) =>
                      handleChange(e, i, "workedOn", works, setWorks)
                    }
                  />
                  <TextField
                    label={`Company ${i + 1}*`}
                    error={isSaving && !work.company}
                    style={{ minWidth: "30%" }}
                    value={work.company}
                    onChange={(e) =>
                      handleChange(e, i, "company", works, setWorks)
                    }
                  />
                  <TextField
                    label={`Location ${i + 1}*`}
                    error={isSaving && !work.location}
                    style={{ minWidth: "30%" }}
                    value={work.location}
                    onChange={(e) =>
                      handleChange(e, i, "location", works, setWorks)
                    }
                  />
                  <TextField
                    id="date"
                    label="Start Date*"
                    type="date"
                    error={isSaving && !work.startDate}
                    value={work.startDate}
                    style={{ minWidth: "30%" }}
                    onChange={(e) =>
                      handleChange(e, i, "startDate", works, setWorks)
                    }
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id="date"
                    label="End Date"
                    type="date"
                    value={work.endDate}
                    style={{ minWidth: "30%" }}
                    onChange={(e) =>
                      handleChange(e, i, "endDate", works, setWorks)
                    }
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
              );
            })}

            <Divider />

            <h2 className="nav_header">
              Educational Details
              <AddCircleIcon
                className="nav_header_icon"
                onClick={() =>
                  setEducations((data) => [
                    ...data,
                    {
                      qualification: "",
                      specialization: "",
                      startDate: "",
                      endDate: "",
                      location: "",
                      company: "",
                    },
                  ])
                }
              />
            </h2>

            {educations.map((work, i) => {
              return (
                <div
                  className="project_input"
                  key={i}
                  style={{ marginBottom: "50px" }}
                >
                  <TextField
                    label={`Qualification ${i + 1}*`}
                    error={isSaving && !work.qualification}
                    style={{ minWidth: "30%" }}
                    value={work.qualification}
                    onChange={(e) =>
                      handleChange(
                        e,
                        i,
                        "qualification",
                        educations,
                        setEducations
                      )
                    }
                  />
                  <TextField
                    label={`Specialization ${i + 1}*`}
                    error={isSaving && !work.specialization}
                    style={{ minWidth: "30%" }}
                    value={work.specialization}
                    onChange={(e) =>
                      handleChange(
                        e,
                        i,
                        "specialization",
                        educations,
                        setEducations
                      )
                    }
                  />
                  <TextField
                    label={`Company ${i + 1}*`}
                    error={isSaving && !work.company}
                    style={{ minWidth: "30%" }}
                    value={work.company}
                    onChange={(e) =>
                      handleChange(e, i, "company", educations, setEducations)
                    }
                  />
                  <TextField
                    label={`Location ${i + 1}*`}
                    error={isSaving && !work.location}
                    style={{ minWidth: "30%" }}
                    value={work.location}
                    onChange={(e) =>
                      handleChange(e, i, "location", educations, setEducations)
                    }
                  />
                  <TextField
                    id="date"
                    label="Start Date*"
                    error={isSaving && !work.startDate}
                    type="date"
                    value={work.startDate}
                    style={{ minWidth: "30%" }}
                    onChange={(e) =>
                      handleChange(e, i, "startDate", educations, setEducations)
                    }
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id="date"
                    label="End Date"
                    type="date"
                    value={work.endDate}
                    style={{ minWidth: "30%" }}
                    onChange={(e) =>
                      handleChange(e, i, "endDate", educations, setEducations)
                    }
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </DialogContent>
        <DialogActions
          style={{ display: "flex", justifyContent: "center", padding: "15px" }}
        >
          <Button
            style={{
              backgroundColor: "grey",
              color: "white",
              marginRight: "15px",
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            style={{ backgroundColor: "#2234ae", color: "white" }}
            onClick={handleCreate}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </motion.div>
  );
}
