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
        I am a second-year <b>BTS SIO (Software Development)</b> student based in
        Nancy, France. I am currently looking for a <b style={{ color: "var(--green-bright)" }}>7-week unpaid intership</b>
        in the software development field, where I can sharpen my skills, contribute to real projects, and grow as a developer.
        
      </p>
    );
    const two = (
      <p>
        Outside of my studies, I have a strong interest in innovation and astronomy.
        I also love playing viddeo games and watching movies.
      </p>
    );

    const tech_stack = [
      "HTML, CSS",
      "PHP",
      "Javascript",
      "Laravel",
      "React.js",
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">About</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Gazi Jarin" src={"/assets/me2.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
