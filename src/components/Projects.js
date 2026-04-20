import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";
import { LanguageContext } from "../LanguageContext";

class Projects extends React.Component {
  static contextType = LanguageContext;
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const { t } = this.context;
    const spotlightProjects = {
      "Agora Web": {
        title: "Agora Web",
        desc: t("proj.agora.desc"),
        techStack: "Symfony, PHP, Doctrine",
        link: "https://github.com/Lavarice/Mission4/tree/sprint54",
        open: "",
        image: "/assets/agoraweb.png",
        doc: "/assets/agoraweb_cr.pdf"
      },
      "Miratlas": {
        title: "Miratlas",
        desc: t("proj.mir.desc"),
        techStack: "Laravel, Tailwind, Docker",
        link: "",
        open: "",
        doc: "/assets/miratlas.pdf",
        image: "/assets/miratlas.png"
      },
      "Yabonlapub": {
        title: "Yabonlapub",
        desc: t("proj.yab.desc"),
        techStack: "Next.js, Tailwind, Neon",
        link: "https://github.com/cyrille33000/site-yabonlapub",
        open: "",
        doc: "/assets/yabonlapub.pdf",
        image: "/assets/yabonlapub.png"
      }
    };
    const projects = {
      "Omori Weather": {
        desc: t("proj.omo.desc"),
        techStack: "Electron, API Météo, HTML/CSS/JS",
        link: "https://github.com/Kamdinee/omori-weather",
        open: "",
        doc: ""
      },
      "Agora Mobile": {
        desc: t("proj.agomob.desc"),
        techStack: "Android Studio, JS, framework Metro",
        link: "https://github.com/MartinLe0/AgoraMobile",
        open: "",
        doc: "/assets/agoramobile.pdf"
      },
      "StageConnect": {
        desc: t("proj.stage.desc"),
        techStack: "PHP, JS, MySQL,",
        link: "",
        open: "",
        doc: "/assets/stageconnect.pdf"
      },
      "WordPress": {
        desc: t("proj.wp.desc"),
        techStack: "WordPress",
        link: "",
        open: "",
        doc: ""
      },
      "Challenge VR 2025": {
        desc: t("proj.vr.desc"),
        techStack: "PHP, MySQL, A-Frame",
        link: "https://github.com/flanOcaramel/Challenge2eVR",
        open: "",
        doc: "/assets/rapport final du challenge.pdf"
      },
      "Veille Informatique": {
        desc: t("proj.veilleinfo.desc"),
        techStack: "n8n, IA, Automatisation",
        link: "",
        open: "",
        doc: "/assets/CR - Méthodologie de veille Informationnelle.pdf"
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">{t("proj.title")}</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption className={`caption-${i + 1}`}>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <div className="project-description">
                    <p>{spotlightProjects[key]["desc"]}</p>
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </div>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                    docLink={spotlightProjects[key]["doc"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                      docLink={projects[key]["doc"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
