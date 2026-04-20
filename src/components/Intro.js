import React from "react";
import "../styles/Intro.css";
import FractalTree from "./FractalTree";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import FadeInSection from "./FadeInSection";
import { LanguageContext } from "../LanguageContext";

class Intro extends React.Component {
  static contextType = LanguageContext;
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
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
      <div id="intro">
        <FractalTree />
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {t("intro.salut")}
            <span className="intro-name">{"kamdine"}</span>
            {"."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle" style={{ marginTop: "10px" }}>{t("intro.et")}</div>
          <div className="intro-desc">
            {t("intro.desc")}
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
