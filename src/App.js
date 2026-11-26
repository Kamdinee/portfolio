import React from "react";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import About from "./components/About";
import Degrees from "./components/Degrees";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Ambient from "./components/Ambient";
import { LanguageProvider } from "./LanguageContext";
import "./App.css";
import "./styles/Global.css";
import "rsuite/dist/styles/rsuite-default.css";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Ambient />
        <NavBar />
        <main id="content">
          <Intro />
          <About />
          <Degrees />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
