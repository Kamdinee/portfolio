import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        Je suis un étudiant en 2ème année de <b>BTS SIO (OPTION SLAM)</b> basé à
        Nancy, France. Je suis actuellement à la recherche d'une <b style={{ color: "var(--green-bright)" }}>alternance en développement</b> pour poursuivre mes études après le BTS,
        où je pourrai perfectionner mes compétences, contribuer à de vrais projets, et grandir en tant que <b style={{ color: "var(--green-bright)" }}>développeur</b>.
      </p>
    );
    const two = (
      <p>
        En dehors de mes études, j'ai un fort intérêt pour l'innovation et l'astronomie.
        J'aime aussi jouer aux jeux vidéo et regarder des films.
      </p>
    );

    const tech_stack = [
      "HTML, CSS",
      "PHP",
      "React.js",
      "Javascript",
      "Laravel",
    ];
    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ presentation</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Quelques technologies avec lesquelles j'ai travaillé :"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`} key={i}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}

              <div className="cv-button-container" style={{ marginTop: "40px", display: "flex", justifyContent: "flex-start" }}>
                <a href="/assets/CV.pdf" download="CV.pdf" style={{ textDecoration: "none" }}>
                  <button className="star-button">
                    Mon CV
                    {[1, 2, 3, 4, 5, 6].map((starNum) => (
                      <div className={`star-${starNum}`} key={starNum}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlSpace="preserve"
                          version="1.1"
                          style={{ shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd" }}
                          viewBox="0 0 784.11 815.53"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <defs></defs>
                          <g id={`Layer_x0020_${starNum}`}>
                            <metadata id={`CorelCorpID_${starNum}Corel-Layer`}></metadata>
                            <path
                              className="fil0"
                              d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    ))}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
