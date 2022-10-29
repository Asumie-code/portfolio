import p5Types from "p5";
import { Vehicle } from "./vehicle";

let vehicles: Vehicle[] = [];
let font: p5Types.Font;
let parent: Element;

const aboutSketch: {
  preload: (p5: p5Types) => void;
  setup: (p5: p5Types, canvasParentRef: Element) => void;
  draw: (p5: p5Types) => void;
  windowResized: (p5: p5Types) => void;
  mouseMoved: (p5: p5Types, event?: MouseEvent) => void;
} = {
  preload: (p5: p5Types) => {
    font = p5.loadFont(process.env.PUBLIC_URL + "/myfont.ttf");
  },
  setup: (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(
      canvasParentRef.clientWidth,
      canvasParentRef.clientWidth * 0.8
    )
      .parent(canvasParentRef)
      .style(`width: 100%`);
    parent = canvasParentRef;
    vehicles = [];
    let points = font.textToPoints("NodeJs", 200, 200, 192, {
      sampleFactor: 0.25,
    });

    for (let pt of points) {
      let vehicle: Vehicle = new Vehicle(pt.x, pt.y, p5);
      vehicles.push(vehicle);
    }
  },

  draw: (p5: p5Types) => {
    p5.background(15, 15, 15);

    for (let veh of vehicles) {
      veh.behaviors(p5);
      veh.update();
      veh.render(p5);
    }
  },

  windowResized: (p5: p5Types) => {
    p5.resizeCanvas(parent.clientWidth, parent.clientWidth * 0.9);
  },

  mouseMoved: () => { },
};

export default aboutSketch;
