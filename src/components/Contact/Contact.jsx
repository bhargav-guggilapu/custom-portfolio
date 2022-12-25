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
import { motion } from "framer-motion";

export default function Contact({ userData }) {
  return (
    <div className="contact">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "100px 10%",
        }}
      >
        <div className="contact_left">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Contact Me
          </motion.h1>
          <div style={{ marginTop: "50px" }}>
            <div>
              <motion.div
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1 }}
                className="contact_info"
                onClick={() => {
                  window.location.href = `mailto:${userData.email}`;
                }}
              >
                <TelegramIcon />
                <p>{userData.email}</p>
              </motion.div>
              <motion.div
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1 }}
                className="contact_info"
              >
                <WhatsAppIcon />
                <p>{userData.mobile}</p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <a href={userData.git} target="_blank" rel="noreferrer">
                <GitHubIcon className="contact_icon" fontSize="large" />
              </a>
              <a href={userData.linkedIn} target="_blank" rel="noreferrer">
                <LinkedInIcon className="contact_icon" fontSize="large" />
              </a>
              <a href={userData.facebook} target="_blank" rel="noreferrer">
                <FacebookIcon className="contact_icon" fontSize="large" />
              </a>
              <a href={userData.instagram} target="_blank" rel="noreferrer">
                <InstagramIcon className="contact_icon" fontSize="large" />
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <a
              href={userData.resume}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button className="contact_btn">
                <span style={{ marginRight: "15px" }}>Download Resume</span>{" "}
                <DownloadForOfflineIcon />
              </button>
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_right"
        >
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
        </motion.div>
      </div>
    </div>
  );
}
