import React from "react";
import "./Header.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Header({ userData }) {
  return (
    <div className="header">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "200px 10%",
        }}
      >
        <div className="header_left">
          <span>Welcome to my Portfolio</span>
          <motion.h1
            initial={{ x: -500 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi! {userData.name} Here.
          </motion.h1>
          <motion.h2
            initial={{ x: -500 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typewriter
              options={{
                strings: userData.designations?.map((des) => `I'm a ${des}`),
                autoStart: true,
                loop: true,
              }}
            />
          </motion.h2>

          <motion.p
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {userData.about}
          </motion.p>
          <Link
            to={"contact"}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <motion.button
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span>Let's Connect</span>
              <ArrowCircleRightIcon />
            </motion.button>
          </Link>
        </div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="header_right"
        >
          <img src={userData.userImage} alt="user"></img>
        </motion.div>
      </div>
    </div>
  );
}
