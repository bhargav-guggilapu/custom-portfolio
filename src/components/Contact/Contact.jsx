import React from "react";
import "./Contact.css";
import SendIcon from "@mui/icons-material/Send";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Contact() {
  return (
    <div className="contact">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "200px 10%",
        }}
      >
        <div className="contact_left">
          <h1>Contact Me</h1>
          <div style={{ marginTop: "50px" }}>
            <div>
              <div className="contact_info">
                <TelegramIcon />
                <p> bhargavguggilapu@gmail.com</p>
              </div>
              <div className="contact_info">
                <WhatsAppIcon />
                <p>(+91) 9149976596</p>
              </div>
            </div>
            <div>
              <a
                href="https://github.com/bhargav-guggilapu"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className="contact_icon" fontSize="large" />
              </a>
              <a
                href="https://www.linkedin.com/in/guggilapu-venkata-siva-bhargav/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon className="contact_icon" fontSize="large" />
              </a>
              <a
                href="https://www.facebook.com/bhargav.arya.528/"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon className="contact_icon" fontSize="large" />
              </a>
              <a
                href="https://www.instagram.com/bhargav_gvs/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon className="contact_icon" fontSize="large" />
              </a>
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1CFyrl1F_H1NPpu3ImnjUoKRkIPwTZM1M/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <span>Download Resume</span> <DownloadForOfflineIcon />
            </button>
          </a>
        </div>
        <div className="contact_right">
          <form>
            <div>
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <div>
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Phone Number" required />
            </div>
            <div>
              <textarea placeholder="Message For Me" />
            </div>
            <button type="submit">
              <span>Send</span>
              <SendIcon />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
