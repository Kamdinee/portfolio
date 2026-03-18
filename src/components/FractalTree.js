import React from "react";
import P5Wrapper from "react-p5-wrapper";
import "../styles/FractalTree.css";

let angle;

const Sketch = p5 => {
  p5.setup = () => {
    // Rendu en haute résolution interne (400x400) pour éviter le flou ("pas flou")
    p5.createCanvas(400, 400); 
    p5.clear();
    angle = p5.PI / 4;
    p5.stroke(255); // Texte en blanc comme l'original
  };

  p5.draw = () => {
    p5.clear();
    p5.translate(200, p5.height);
    angle = p5.map(p5.sin(p5.frameCount * 0.01), -1, 1, p5.PI / 2, p5.PI / 16);
    branch(100); 
  };

  function branch(len) {
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    if (len > 4) {
      p5.push();
      p5.rotate(angle);
      branch(len * 0.67);
      p5.pop();
      p5.push();
      p5.rotate(-angle);
      branch(len * 0.67);
      p5.pop();
    }
  }
};

const FractalTree = () => (
  <div id="fractal-tree" style={{ display: "flex", justifyContent: "center", marginBottom: "5px" }}>
    <P5Wrapper sketch={Sketch} />
  </div>
);

export default FractalTree;
