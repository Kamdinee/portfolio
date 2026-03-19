import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {
      "Agora Web": {
        title: "Agora Web",
        desc: "Application du site d'administration des données de la MJC AGORA développé en 2ème année de BTS",
        techStack: "Symfony, PHP, Doctrine",
        link: "https://github.com/Lavarice/Mission4/tree/sprint54",
        open: "",
        image: "/assets/agoraweb.png",
        doc: "/assets/agoraweb_cr.pdf"
      },
      "Miratlas": {
        title: "Miratlas",
        desc: "Customer Dashboard / SSO qui affichent aux clients des informations récapitulatives de leur Skymonitor via API",
        techStack: "Laravel, Tailwind, Docker",
        link: "",
        open: "",
        doc: "/assets/miratlas.pdf",
        image: "/assets/miratlas.png"
      },
      "Yabonlapub": {
        title: "Yabonlapub",
        desc: "Amélioration et sécurisation du site caritatif Yabonlapub, conçu pour reverser les revenus générés par la publicité à des associations.",
        techStack: "Next.js, Tailwind, Neon",
        link: "https://github.com/cyrille33000/site-yabonlapub",
        open: "",
        doc: "/assets/yabonlapub.pdf",
        image: "/assets/yabonlapub.png"
      }
    };
    const projects = {
      "Omori Weather": {
        desc:
          "Un widget météo inspiré du jeu Omori, avec des humeurs dynamiques où les personnages réagissent à la météo.",
        techStack: "Electron, API Météo, HTML/CSS/JS",
        link: "https://github.com/Kamdinee/omori-weather",
        open: "",
        doc: ""
      },
      "Agora Mobile": {
        desc:
          "Application mobile créée sur mandat de la MJC Agora pour publier des informations sur les jeux, marques, plateformes, genres et classement PEGI.",
        techStack: "Android Studio, JS, framework Metro",
        link: "https://github.com/MartinLe0/AgoraMobile",
        open: "",
        doc: "/assets/agoramobile.pdf"
      },
      "StageConnect": {
        desc:
          "Plateforme de mise en relation étudiants/entreprises dédiée aux offres de stage, intégrant des interfaces adaptées à chaque profil.",
        techStack: "PHP, JS, MySQL,",
        link: "",
        open: "",
        doc: "/assets/stageconnect.pdf"
      },
      "WordPress": {
        desc:
          "Développement d'un portfolio via le CMS WordPress dans le but d'en découvrir les fonctionnalités et l'écosystème.",
        techStack: "WordPress",
        link: "",
        open: "",
        doc: ""
      },
      "Challenge VR 2025": {
        desc:
          "Découverte de l'immersion en réalité virtuelle, structurée autour du choix d'un avatar et de l'exploration d'un monde interactif développé pour ce projet.",
        techStack: "PHP, MySQL, A-Frame",
        link: "https://github.com/flanOcaramel/Challenge2eVR",
        open: "",
        doc: "/assets/rapport final du challenge.pdf"
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projets</span>
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
