import React from "react";
import { createPortal } from "react-dom";
import FadeInSection from "./FadeInSection";
import "../styles/EpreuveE5.css";
import "../styles/About.css";
import { LanguageContext } from "../LanguageContext";

class EpreuveE5 extends React.Component {
  static contextType = LanguageContext;
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.key === "Escape" && this.state.showModal) {
      this.setState({ showModal: false });
    }
  };

  render() {
    const { t } = this.context;
    return (
      <div id="epreuve-e5">
        <div className="section-header ">
          <span className="section-title">{t("epreuve.title")}</span>
        </div>
        <FadeInSection>
          <div className="e5-content">
            <div className="e5-description">
              <p>{t("epreuve.p1")}</p>
              <p>{t("epreuve.p2")}</p>
              <p>{t("epreuve.p3")}</p>
            </div>

            <div className="e5-grid-container">
              <div className="e5-image-wrapper" onClick={() => this.setState({ showModal: true })} style={{ position: 'relative', height: '800px', overflow: 'hidden' }}>
                <iframe
                  src="/assets/grille.pdf#view=FitH&scrollbar=0&toolbar=0&navpanes=0"
                  className="e5-grid-image"
                  style={{ 
                    opacity: this.state.showModal ? 0 : 1, 
                    transition: "opacity 0.2s", 
                    height: "100%", 
                    width: "100%",
                    pointerEvents: "none", 
                    border: "none",
                    borderRadius: "10px"
                  }}
                  title="Grille Preview"
                />
                {/* Overlay to capture clicks and show zoom cursor */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, cursor: 'zoom-in' }} />
              </div>

              <div className="cv-button-container hover-download-button" style={{ display: "flex", justifyContent: "center" }}>
                <a href="/assets/grille.xlsx" download="grille.xlsx" style={{ textDecoration: "none" }}>
                  <button className="star-button">
                    {t("epreuve.btn")}
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
            <div className="custom-modal-content" onClick={(e) => {
              if (e.target === e.currentTarget) {
                this.setState({ showModal: false });
              }
            }}>
              <span className="custom-modal-close" onClick={() => this.setState({ showModal: false })}>&times;</span>
              <iframe src="/assets/grille.pdf" className="pdf-viewer" title="Grille E5" />
            </div>
          </div>,
          document.body
        )}

      </div>
    );
  }
}

export default EpreuveE5;
