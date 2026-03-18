import React from "react";
import FadeInSection from "./FadeInSection";

class Veilles extends React.Component {
  render() {
    return (
      <div id="veilles">
        <div className="section-header ">
          <span className="section-title">/ veilles</span>
        </div>
        <FadeInSection>
          <div className="about-content">
            <div className="about-description">
              [Contenu Veilles à venir...]
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default Veilles;
