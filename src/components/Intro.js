import React from "react";
import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";



class Intro extends React.Component {
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
  render() {
    return (
      <div id="intro">
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, i'm "}
            <span className="intro-name">{"kamdine"}</span>
            {"."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">and i code sometimes.</div>
          <div className="intro-desc">
            I'm a second-year software development student based in Nancy, France.
            Passionate about creating clean, minimalist, and visually appealing websites
            that combine design and functionality to deliver great user experiences.
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
