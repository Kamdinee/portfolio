import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";
import { LanguageContext } from "../LanguageContext";

class About extends React.Component {
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
    const one = (
      <p>
        {t("about.p1.1")}<b>{t("about.p1.bold1")}</b>
        {t("about.p1.2")}<b style={{ color: "var(--green-bright)" }}>{t("about.p1.bold2")}</b>
        {t("about.p1.3")}<b style={{ color: "var(--green-bright)" }}>{t("about.p1.bold3")}</b>
      </p>
    );
    const two = (
      <p>
        {t("about.p2")}
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
            <span className="section-title">{t("about.title")}</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {t("about.tech")}
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
                <a href="/assets/CV_Kamdine_HASSANZADEH.pdf" download="CV_Kamdine_HASSANZADEH.pdf" style={{ textDecoration: "none" }}>
                  <button className="star-button">
                    {t("about.cv")}
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
