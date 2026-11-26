import React from "react";
import "../styles/Intro.css";
import FractalTree from "./FractalTree";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import FadeInSection from "./FadeInSection";
import { LanguageContext } from "../LanguageContext";

class Intro extends React.Component {
  static contextType = LanguageContext;

  componentDidMount() {
    document.body.classList.add("not-loaded");
    this.timeoutId = setTimeout(() => {
      document.body.classList.remove("not-loaded");
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
    document.body.classList.remove("not-loaded");
  }

  render() {
    const { t } = this.context;
    return (
      <section id="intro">
        <div className="intro-inner">
          <FractalTree />
          <Typist avgTypingDelay={120}>
            <span className="intro-title">
              {t("intro.salut")}
              <span className="intro-name">{"kamdine"}</span>
              {"."}
            </span>
          </Typist>
          <FadeInSection>
            <div className="intro-subtitle">{t("intro.et")}</div>
            <p className="intro-desc">{t("intro.desc")}</p>
            <div className="intro-badge">{t("intro.badge")}</div>
            <div className="intro-actions">
              <a href="#projects" className="cta cta-primary">
                {t("intro.cta.projects")}
              </a>
              <a href="#contact" className="cta cta-ghost">
                {t("intro.cta.contact")}
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    );
  }
}

export default Intro;
