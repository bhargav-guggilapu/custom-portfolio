import React from "react";
import "./Header.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Header({ url }) {
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
            Hi! Bhargav Here.
          </motion.h1>
          <motion.h2
            initial={{ x: -500 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typewriter
              options={{
                strings: [
                  "I'm a Web Developer",
                  "I'm a Software Engineer",
                  "I'm a Web Designer",
                ],
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet
            perspiciatis rem ut perferendis. Voluptatem minus maxime unde
            obcaecati, ea quidem ab numquam. Nam ipsam excepturi a, voluptatem
            temporibus fugit.
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
          <img src={url} alt="user"></img>
        </motion.div>
      </div>
    </div>
  );
}
