import React from "react";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import About from "./components/About";
import Degrees from "./components/Degrees";
import Projects from "./components/Projects";
import Veilles from "./components/Veilles";
import EpreuveE5 from "./components/EpreuveE5";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
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
        <TopBar />
        <NavBar />
        <main id="content">
          <Intro />
          <About />
          <Degrees />
          <Experience />
          <Projects />
          <Veilles />
          <EpreuveE5 />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
