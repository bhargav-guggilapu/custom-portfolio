import React from "react";
import "./Header.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Typewriter from "typewriter-effect";

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
          <h1>Hi! Bhargav Here.</h1>
          <h2>
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
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet
            perspiciatis rem ut perferendis. Voluptatem minus maxime unde
            obcaecati, ea quidem ab numquam. Nam ipsam excepturi a, voluptatem
            temporibus fugit.
          </p>
          <button>
            <span>Let's Connect</span>
            <ArrowCircleRightIcon />
          </button>
        </div>
        <div className="header_right">
          <img src={url} alt="user"></img>
        </div>
      </div>
    </div>
  );
}
