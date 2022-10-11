import p5Types from "p5"; 

let x = 150;
let y = 156;
let parent: Element; 
const aboutSketch: {
  setup: (p5: p5Types, canvasParentRef: Element) => void;
  draw: (p5: p5Types) => void;
  windowResized: (p5: p5Types) => void;
  mouseMoved: (p5: p5Types, event?: MouseEvent) => void;

} = {

  setup: (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(canvasParentRef.clientWidth, canvasParentRef.clientWidth * 0.8).parent(
      canvasParentRef
    ).style(`width: 100%`);
    parent = canvasParentRef; 
     
  },
  
  draw: (p5: p5Types) => {
    p5.background(0);
    p5.ellipse(x, y, 70, 70);
  },

  windowResized: (p5: p5Types) => {
    p5.resizeCanvas(parent.clientWidth, parent.clientWidth * 0.9 );
  
  },

  mouseMoved: () => {
    if (y < window.innerHeight) {
      x += 1;
      y += 3;
    }
  },
  
};

export default aboutSketch;
