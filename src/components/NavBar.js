import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FractalTree from "./FractalTree";
import "../styles/NavBar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: ""
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll(); // Set initial state
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const sections = ["about", "degrees", "experience", "projects", "veilles", "epreuve-e5"];
    let current = "";

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Trigger active if the element crosses the middle of the screen
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          current = "#" + section;
          break;
        }
      }
    }

    if (current !== this.state.activeLink) {
      this.setState({ activeLink: current });
    }
  }

  render() {
    const { activeLink } = this.state;

    return (
      <Navbar className="bg-body-tertiary vertical-navbar">
        <Container className="flex-column navbar-container">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="w-100 flex-column justify-content-start">
            <FractalTree />
            <div className="navbar-logo" style={{ marginBottom: "2.5rem", marginTop: "-5px", textAlign: "center" }}>
              <a href="#intro" className="logo-text">
                kam
              </a>
            </div>
            <div className="navbar-socials">
              <Nav.Link href="mailto:kamdine.hzd@outlook.com">
                <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
              </Nav.Link>
              <Nav.Link href="https://github.com/Kamdinee" target="_blank">
                <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/kamdine/" target="_blank">
                <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
              </Nav.Link>
            </div>
            <Nav className="flex-column w-100 nav-links-container">
              <Nav.Link href="#about" className={activeLink === "#about" ? "active-link" : ""}>Présentation</Nav.Link>
              <Nav.Link href="#degrees" className={activeLink === "#degrees" ? "active-link" : ""}>Formations</Nav.Link>
              <Nav.Link href="#experience" className={activeLink === "#experience" ? "active-link" : ""}>Expériences</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === "#projects" ? "active-link" : ""}>Projets</Nav.Link>
              <Nav.Link href="#veilles" className={activeLink === "#veilles" ? "active-link" : ""}>Veilles</Nav.Link>
              <Nav.Link href="#epreuve-e5" className={activeLink === "#epreuve-e5" ? "active-link" : ""}>Épreuve E5</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="navbar-footer">
            Copyright 2026 &copy; Kamdine
          </div>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
