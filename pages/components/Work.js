import React from "react";
import bbImage from "../../assets/images/battle-brands-petpage.PNG";
import calRepImage from "../../assets/images/cal-replacer.PNG";
import weatherImage from "../../assets/images/weather-dashboard-portfolio-feature.PNG";
import Icon from "./fragments/Icon";

export default function Work({ theme }) {
  const projects = [
    {
      id: 1,
      title: "Calorie Replacer",
      src: calRepImage,
      icon: "running",
      alt: "Calorie Replacer Home View",
      desc: "A workout-oriented application that after taking in user information, as well as a user's recent workouts, generates a total calories burned statistic that is then used to calculate how many of a given recipe a user just burnt off.",
      repo: "https://github.com/rangamboa/training-calorie-tracker",
      deploy: "https://rangamboa.github.io/training-calorie-tracker/",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      src: weatherImage,
      icon: "cloud-sun",
      alt: "Weather Dashboard Home View",
      desc: "A simple weather application that pulls a visitors city and provides current weather as well as a 7 day forecast.",
      repo: "https://github.com/Atlas238/weather-dashboard",
      deploy: "https://atlas238.github.io/weather-dashboard/",
    },
    {
      id: 3,
      title: "Battle Brands",
      src: bbImage,
      icon: "paw",
      alt: "Battle Brands Pet Page",
      desc: "A digital pet collecter application with a tech-oriented spin. Create your own account, link your social media accounts and start playing with your new digital creature!",
      repo: "https://github.com/Atlas238/battle-brands",
      deploy: "https://battle-brands.herokuapp.com/",
    },
    {
      id: 4,
      title: "Prepercolator",
      icon: "coffee",
      alt: "Prepercolator Page",
      desc: "A Coffee drink creation and ordering app for small business, focused on speeding up and clarifying the interactions between customer and barista.",
      repo: "https://github.com/davidlucio/prepercolator",
      deploy: "https://prepercolator.herokuapp.com/",
    },
  ];

  return (
    <div key={'work'} className="work-container">
      <a className={`toplink ${theme}`} href="#home">
        To Top
      </a>
      <h2 className={`work-heading ${theme}`}>
        Some of my previous projects...
      </h2>
      <div className="work-card-box">
        {projects.map((project) => {
          return (
            <div key = {project.id} className={`work-card ${theme}`}>
              <div className={`work-card-header ${theme}`}>
                <h4>{project.title}</h4>
              </div>
              <div className={`work-card-body ${theme}`}>
                <div className={`work-card-icon ${theme}`}>
                  <Icon icon={project.icon} />
                </div>
                <p>{project.desc}</p>
              </div>
              <ul className="work-card-list">
                <li className={`work-card-link ${theme}`}>
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    Visit Repository
                  </a>
                  <svg
                    height={5}
                    width={175}
                    strokeWidth={3}
                    className={`work-link-underline ${theme}`}
                  >
                    <line
                      x1={0}
                      x2={200}
                      stroke={theme === "light" ? "black" : "white"}
                    />
                  </svg>
                </li>
                <li className={`work-card-link ${theme}`}>
                  <a href={project.deploy} target="_blank" rel="noreferrer">
                    Visit Deployment
                  </a>
                  <svg
                    height={5}
                    width={175}
                    strokeWidth={3}
                    className={`work-link-underline ${theme}`}
                  >
                    <line
                      x1={0}
                      x2={200}
                      stroke={theme === "light" ? "black" : "white"}
                    />
                  </svg>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
      <div className={`work-footer ${theme}`}>
        {theme === "light" ? (
          <p
            style={{
              position: "relative",
              top: "75%",
              display: "flex",
              justifyContent: "center",
              fontSize: "3rem",
            }}
          >
            <a
              style={{ padding: "1rem", color: "black" }}
              href="https://www.github.com/Atlas238"
            >
              <Icon icon={["fab", "github"]} />
            </a>
            <a
              style={{ padding: "1rem", color: "black" }}
              href="https://www.linkedin.com/in/jack-bentsen"
            >
              <Icon icon={["fab", "linkedin"]} />
            </a>
            <a
              style={{ padding: "1rem", color: "black" }}
              href="https://www.facebook.com/Ahtlus"
            >
              <Icon icon={["fab", "facebook"]} />
            </a>
          </p>
        ) : (
          <p
            style={{
              position: "relative",
              top: "75%",
              display: "flex",
              justifyContent: "center",
              fontSize: "3rem",
            }}
          >
            <a
              style={{ padding: "1rem", color: "white" }}
              href="https://www.github.com/Atlas238"
            >
              <Icon icon={["fab", "github"]} />
            </a>
            <a
              style={{ padding: "1rem", color: "white" }}
              href="https://www.linkedin.com/in/jack-bentsen"
            >
              <Icon icon={["fab", "linkedin"]} />
            </a>
            <a
              style={{ padding: "1rem", color: "white" }}
              href="https://www.facebook.com/Ahtlus"
            >
              <Icon icon={["fab", "facebook"]} />
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
