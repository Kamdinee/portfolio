import React from "react";
import "../styles/Intro.css";
import "../styles/Flowers.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
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
    return (
      <div id="intro">
        {/* Début de l'intégration de l'horloge (Flowers) */}
        <div className="flowers-container">
          <div className="flowers">
            <div className="flower flower--1">
              <div className="flower__leafs flower__leafs--1">
                <div className="flower__leaf flower__leaf--1"></div>
                <div className="flower__leaf flower__leaf--2"></div>
                <div className="flower__leaf flower__leaf--3"></div>
                <div className="flower__leaf flower__leaf--4"></div>
                <div className="flower__white-circle"></div>

                <div className="flower__light flower__light--1"></div>
                <div className="flower__light flower__light--2"></div>
                <div className="flower__light flower__light--3"></div>
                <div className="flower__light flower__light--4"></div>
                <div className="flower__light flower__light--5"></div>
                <div className="flower__light flower__light--6"></div>
                <div className="flower__light flower__light--7"></div>
                <div className="flower__light flower__light--8"></div>
              </div>
              <div className="flower__line">
                <div className="flower__line__leaf flower__line__leaf--1"></div>
                <div className="flower__line__leaf flower__line__leaf--2"></div>
                <div className="flower__line__leaf flower__line__leaf--3"></div>
                <div className="flower__line__leaf flower__line__leaf--4"></div>
                <div className="flower__line__leaf flower__line__leaf--5"></div>
                <div className="flower__line__leaf flower__line__leaf--6"></div>
              </div>
            </div>

            <div className="flower flower--2">
              <div className="flower__leafs flower__leafs--2">
                <div className="flower__leaf flower__leaf--1"></div>
                <div className="flower__leaf flower__leaf--2"></div>
                <div className="flower__leaf flower__leaf--3"></div>
                <div className="flower__leaf flower__leaf--4"></div>
                <div className="flower__white-circle"></div>

                <div className="flower__light flower__light--1"></div>
                <div className="flower__light flower__light--2"></div>
                <div className="flower__light flower__light--3"></div>
                <div className="flower__light flower__light--4"></div>
              </div>
              <div className="flower__line">
                <div className="flower__line__leaf flower__line__leaf--1"></div>
                <div className="flower__line__leaf flower__line__leaf--2"></div>
                <div className="flower__line__leaf flower__line__leaf--3"></div>
                <div className="flower__line__leaf flower__line__leaf--4"></div>
              </div>
            </div>

            <div className="flower flower--3">
              <div className="flower__leafs flower__leafs--3">
                <div className="flower__leaf flower__leaf--1"></div>
                <div className="flower__leaf flower__leaf--2"></div>
                <div className="flower__leaf flower__leaf--3"></div>
                <div className="flower__leaf flower__leaf--4"></div>
                <div className="flower__white-circle"></div>

                <div className="flower__light flower__light--1"></div>
                <div className="flower__light flower__light--2"></div>
                <div className="flower__light flower__light--3"></div>
                <div className="flower__light flower__light--4"></div>
              </div>
              <div className="flower__line">
                <div className="flower__line__leaf flower__line__leaf--1"></div>
                <div className="flower__line__leaf flower__line__leaf--2"></div>
                <div className="flower__line__leaf flower__line__leaf--3"></div>
                <div className="flower__line__leaf flower__line__leaf--4"></div>
              </div>
            </div>





          </div>
        </div>
        {/* Fin de l'intégration de l'horloge (Flowers) */}
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"salut, je suis "}
            <span className="intro-name">{"kamdine"}</span>
            {"."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle" style={{ marginTop: "10px" }}>et je code parfois.</div>
          <div className="intro-desc">
            Je suis un étudiant en 2ème année de développement logiciel basé à Nancy, France.
            Passionné par la création de sites web propres, minimalistes et visuellement attrayants
            qui combinent design et fonctionnalité pour offrir d'excellentes expériences utilisateur.
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
