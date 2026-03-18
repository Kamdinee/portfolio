import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar className="bg-body-tertiary vertical-navbar">
        <Container className="flex-column navbar-container">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="w-100 flex-column justify-content-center">
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
              <Nav.Link href="#about">Présentation</Nav.Link>
              <Nav.Link href="#degrees">Formations</Nav.Link>
              <Nav.Link href="#experience">Expériences</Nav.Link>
              <Nav.Link href="#projects">Projets</Nav.Link>
              <Nav.Link href="#veilles">Veilles</Nav.Link>
              <Nav.Link href="#epreuve-e4">Épreuve E4</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="navbar-footer">
            Copyright 2026 &copy; <b>Kamdine</b>
          </div>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
