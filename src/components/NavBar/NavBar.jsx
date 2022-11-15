import React, { useState } from "react";
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

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [clickedLink, setClickedLink] = useState("home");

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
    <div className={`navbar ${scrolled ? "active" : ""}`}>
      <button className={`navbar_button ${scrolled ? "active" : ""}`}>
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
        <a
          href="https://github.com/bhargav-guggilapu"
          target="_blank"
          rel="noreferrer"
        >
          <BootstrapTooltip title="GitHub">
            <GitHubIcon
              className={`navbar_icon ${scrolled ? "active" : ""}`}
              fontSize="large"
            />
          </BootstrapTooltip>
        </a>
        <a
          href="https://www.linkedin.com/in/guggilapu-venkata-siva-bhargav/"
          target="_blank"
          rel="noreferrer"
        >
          <BootstrapTooltip title="LinkedIn">
            <LinkedInIcon
              className={`navbar_icon ${scrolled ? "active" : ""}`}
              fontSize="large"
            />
          </BootstrapTooltip>
        </a>
        <a
          href="https://www.facebook.com/bhargav.arya.528/"
          target="_blank"
          rel="noreferrer"
        >
          <BootstrapTooltip title="Facebook">
            <FacebookIcon
              className={`navbar_icon ${scrolled ? "active" : ""}`}
              fontSize="large"
            />
          </BootstrapTooltip>
        </a>
        <a
          href="https://www.instagram.com/bhargav_gvs/"
          target="_blank"
          rel="noreferrer"
        >
          <BootstrapTooltip title="Instagram">
            <InstagramIcon
              className={`navbar_icon ${scrolled ? "active" : ""}`}
              fontSize="large"
            />
          </BootstrapTooltip>
        </a>
        <a
          href="https://drive.google.com/file/d/1CFyrl1F_H1NPpu3ImnjUoKRkIPwTZM1M/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <BootstrapTooltip title="Resume">
            <DescriptionIcon
              className={`navbar_icon ${scrolled ? "active" : ""}`}
              fontSize="large"
            />
          </BootstrapTooltip>
        </a>
      </div>
    </div>
  );
}
