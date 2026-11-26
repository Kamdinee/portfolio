import React from "react";
import { createPortal } from "react-dom";
import FadeInSection from "./FadeInSection";
import SectionHeader from "./SectionHeader";
import { StarButton } from "./About";
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
      <section id="epreuve-e5">
        <FadeInSection>
          <SectionHeader title={t("epreuve.title")} />
          <div className="e5-content">
            <div className="e5-description">
              <span className="e5-note">{t("epreuve.note")}</span>
              <p>{t("epreuve.p1")}</p>
              <p>{t("epreuve.p2")}</p>
              <p>{t("epreuve.p3")}</p>
            </div>

            <div className="e5-grid-container">
              <div
                role="button"
                tabIndex={0}
                className="e5-image-wrapper"
                onClick={() => this.setState({ showModal: true })}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    this.setState({ showModal: true });
                  }
                }}
                aria-label={t("epreuve.zoom")}
              >
                <iframe
                  src="/assets/grille.pdf#view=FitH&scrollbar=0&toolbar=0&navpanes=0"
                  className="e5-grid-image"
                  style={{ opacity: this.state.showModal ? 0 : 1 }}
                  title="Grille Preview"
                  tabIndex={-1}
                />
                <span className="e5-zoom-hint">{t("epreuve.zoom")}</span>
              </div>

              <div className="hover-download-button">
                <a href="/assets/grille.xlsx" download="grille.xlsx" className="star-link">
                  <StarButton>{t("epreuve.btn")}</StarButton>
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
              <button type="button" className="custom-modal-close" aria-label="Fermer" onClick={() => this.setState({ showModal: false })}>&times;</button>
              <iframe src="/assets/grille.pdf" className="pdf-viewer" title="Grille E5" />
            </div>
          </div>,
          document.body
        )}
      </section>
    );
  }
}

export default EpreuveE5;
