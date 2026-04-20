import React from "react";
import P5Wrapper from "react-p5-wrapper";
import "../styles/FractalTree.css";

let angle;

const Sketch = p5 => {
  p5.setup = () => {
    // Rendu en résolution adaptée au nouveau design
    p5.createCanvas(800, 800); 
    p5.clear();
    angle = p5.PI / 4;
  };

  p5.draw = () => {
    p5.clear();
    const isLightMode = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLightMode) {
      p5.stroke(51, 50, 50);
    } else {
      p5.stroke(255);
    }
    p5.strokeWeight(1.5);
    p5.translate(400, p5.height - 20);
    angle = p5.map(p5.sin(p5.frameCount * 0.01), -1, 1, p5.PI / 2, p5.PI / 16);
    branch(220); 
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
  <div id="fractal-tree" style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
    <P5Wrapper sketch={Sketch} />
  </div>
);

export default FractalTree;
