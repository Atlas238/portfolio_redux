import {
  faBootstrap,
  faCss3,
  faHtml5,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Transition } from "react-transition-group";

const skills = [
  {
    name: "React",
    icon: faReact,
    x1: 30,
    x2: 95,
  },
  {
    name: "Nodejs",
    icon: faNodeJs,
    x1: 25,
    x2: 100,
  },
  {
    name: "Javascript",
    icon: faJs,
    x1: 10,
    x2: 115,
  },
  {
    name: "Bootstrap",
    icon: faBootstrap,
    x1: 15,
    x2: 110,
  },
  {
    name: "CSS3",
    icon: faCss3,
    x1: 35,
    x2: 90,
  },
  {
    name: "HTML5",
    icon: faHtml5,
    x1: 30,
    x2: 95,
  },
];

export default function Skills({ theme }) {
  const [active, setActive] = useState(0);

  const duration = 100;
  const defaultStyle = {
    transition: `opacity ${duration}ms ease`,
    display: "none",
    opacity: 0,
  };
  const transitionStyles = {
    entering: { opacity: 1, display: "block" },
    entered: { opacity: 1, display: "block" },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <div>
      <h3 className={`skills-heading ${theme} `}>
        <span>Some of the tools I've used before...</span>
      </h3>
      <div className={`skills-block ${theme}`}>
        <div className={`skill-card-container ${theme}`}>
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className={
                  active === index
                    ? `skill-card ${theme} active`
                    : `skill-card ${theme}`
                }
              >
                <FontAwesomeIcon icon={skill.icon} />
              </div>
            );
          })}
        </div>
        <ul>
          {skills.map((skill, index) => {
            return (
              <li
                key={index}
                style={{ display: "flex", flexDirection: "column" }}
                className={active === index ? `listitem active` : `listitem`}
              >
                <button
                  id={index}
                  className={`focusSkillBtn`}
                  onClick={() => setActive(index)}
                >
                  {skill.name}
                </button>
                <svg
                  height={5}
                  width={125}
                  strokeWidth={3}
                  className={
                    active === index
                      ? "skill-underline active"
                      : "skill-underline"
                  }
                >
                  <line
                    x1={skill.x1}
                    x2={skill.x2}
                    stroke={theme === "dark" ? "#5dd8ffc9" : "#26b4e7"}
                  />
                </svg>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={`floating-skill-details ${theme}`}>
        <Transition in={active === 0 ? true : false} timeout={0} unmountOnExit>
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <h4>React</h4>
              <p>
                This portfolio right here was built on React! While originally built on 
                vanilla React, this portfolio has been adapted to fit into the Next.js
                framework. You can also find older React projects in the work section. 
                Currently learning React Native...
              </p>
            </div>
          )}
        </Transition>
        <Transition in={active === 1 ? true : false} timeout={0} unmountOnExit>
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <h4>Node</h4>
              <p>
                Most of my foundational learning was done while interacting with
                Node projects as well as the npm cli.
              </p>
            </div>
          )}
        </Transition>
        <Transition in={active === 2 ? true : false} timeout={0} unmountOnExit>
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <h4>Javascript</h4>
              <p>
                My first and strongest language, I began my programming journey with Javascript. 
                I have since learned the fundamentals of Java and C++, as well as some of the basics 
                of Typescript.
              </p>
            </div>
          )}
        </Transition>
        <Transition in={active === 3 ? true : false} timeout={0} unmountOnExit>
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <h4>Bootstrap</h4>
              <p>
                While this portfolio was built on vanilla css, I have some
                familiarity with bootstrap as well as its react counterparts.
              </p>
            </div>
          )}
        </Transition>
        <Transition in={active === 4 ? true : false} timeout={0} unmountOnExit>
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <h4>CSS3</h4>
              <p>
                Tinkering with CSS is one of my favorite parts of front end
                development! From unique hover effects, to reactive design, I
                enjoy user experience and being able to customize interaction.
              </p>
            </div>
          )}
        </Transition>
        <Transition in={active === 5 ? true : false} timeout={0} unmountOnExit>
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <h4>HTML5</h4>
              <p>
                Before the days of React, Bootstrap and the like, I began my
                journey behind the curtains of the web in base Html5. I can
                comfortably navigate a base index file, and am learning how to
                better accomodate screenreaders and other types of alternative
                inteaction.
              </p>
            </div>
          )}
        </Transition>
      </div>
    </div>
  );
}
