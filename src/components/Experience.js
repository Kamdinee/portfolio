import React from "react";
import JobList from "./JobList";
import "../styles/Experience.css";
import FadeInSection from "./FadeInSection";
import { LanguageContext } from "../LanguageContext";

class Experience extends React.Component {
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
    return (
      <div id="experience">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">{t("exp.title")}</span>
          </div>
          <JobList></JobList>
        </FadeInSection>
      </div>
    );
  }
}

export default Experience;
