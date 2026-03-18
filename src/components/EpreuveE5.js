import React from "react";
import { createPortal } from "react-dom";
import FadeInSection from "./FadeInSection";
import "../styles/EpreuveE5.css";
import "../styles/About.css";

class EpreuveE5 extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  render() {
    return (
      <div id="epreuve-e5">
        <div className="section-header ">
          <span className="section-title">/ épreuve e5 </span>
        </div>
        <FadeInSection>
          <div className="e5-content">
            <div className="e5-description">
              <p>
                L'épreuve E5 est <b>une épreuve clé</b> du BTS SIO, elle doit être composée de minimum deux projets ayant un contexte commun en rapport avec l'option choisie <b>(SLAM pour mon cas)</b>.
              </p>
              <p>
                L'objectif de cette épreuve est d'évaluer le candidat sur une des deux situations professionnelles qu'il aura réalisées sur les 2 ans de formation.
              </p>
              <p>
                Cette épreuve est aussi accompagnée d'un tableau des compétences, compétences qui devront être décrites et réalisées au cours des projets présentés.
              </p>
            </div>

            <div className="e5-grid-container">
              <div className="e5-image-wrapper" onClick={() => this.setState({ showModal: true })}>
                <img
                  src="/assets/grilles.png"
                  alt="Grille de compétences E5"
                  className="e5-grid-image"
                  style={{ opacity: this.state.showModal ? 0 : 1, transition: "opacity 0.2s" }}
                />
              </div>

              <div className="cv-button-container hover-download-button" style={{ display: "flex", justifyContent: "center" }}>
                <a href="/assets/grille.xlsx" download="grille.xlsx" style={{ textDecoration: "none" }}>
                  <button className="star-button">
                    Télécharger
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

        {this.state.showModal && createPortal(
          <div
            className="custom-modal-overlay"
            onClick={() => this.setState({ showModal: false })}
          >
            <div className="custom-modal-content" onClick={(e) => e.stopPropagation()}>
              <img src="/assets/grilles.png" alt="Zoom Grille E5" />
            </div>
          </div>,
          document.body
        )}

      </div>
    );
  }
}

export default EpreuveE5;
