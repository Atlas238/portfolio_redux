import React from "react";
import avatar from "../../assets/images/me.jpeg";
import { ReactComponent as JavascriptSVG } from "../../assets/icons/icons8-javascript.svg";
import { ReactComponent as HTML5SVG } from "../../assets/icons/icons8-html-5.svg";
import { ReactComponent as CSS3SVG } from "../../assets/icons/icons8-css3.svg";
import { ReactComponent as JquerySVG } from "../../assets/icons/icons8-jquery.svg";
import { ReactComponent as NPMSVG } from "../../assets/icons/icons8-npm.svg";
import { ReactComponent as ReactSVG } from "../../assets/icons/icons8-react.svg";

export default function Home() {
  const knownTech = [
    {
      title: "Javascript",
      icon: <JavascriptSVG />,
    },
    {
      title: "HTML5",
      icon: <HTML5SVG />,
    },
    {
      title: "CSS3",
      icon: <CSS3SVG />,
    },
    {
      title: "JQuery",
      icon: <JquerySVG />,
    },
    {
      title: "NPM",
      icon: <NPMSVG />,
    },
    {
      title: "React",
      icon: <ReactSVG />,
    },
  ];

  return (
    <div className="homeContainer">
      <div className="welcomeContainer">
        <div className="avatarContainer">
          <img src={avatar} alt="Jack Ryan Bentsen"></img>
          <h2>
            Hi! My name is Jack Ryan Bentsen and I am a Full Stack Web
            Developer!
          </h2>
        </div>
      </div>
      <hr />
      <h4
        style={{
          textAlign: "center",
          margin: "1rem",
          fontSize: "1.5rem",
        }}
      >
        Some of the tools I've used before...
      </h4>
      <div className="techCardContainer">
        {knownTech.map((tech) => {
          return (
            <div className="knownTechCard">
              {tech.icon}
              <p>{tech.title}</p>
            </div>
          );
        })}
      </div>
      <div style={{ textAlign: "center", padding: 10 }}>
        <a
          href="https://icons8.com/"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          Icons from Icons8
        </a>
      </div>
    </div>
  );
}
