import React from "react";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import About from "./components/About";
import Degrees from "./components/Degrees";
import Projects from "./components/Projects";
import Veilles from "./components/Veilles";
import EpreuveE5 from "./components/EpreuveE5";
import NavBar from "./components/NavBar";
import "./App.css";
import "./styles/Global.css";
import "rsuite/dist/styles/rsuite-default.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Degrees></Degrees>
        <Experience></Experience>
        <Projects></Projects>
        <Veilles></Veilles>
        <EpreuveE5></EpreuveE5>
      </div>
    </div>
  );
}

export default App;
