import p5Types from "p5";
import { Vehicle } from "./vehicle";

let vehicles: Vehicle[] = [];
let font: p5Types.Font;
let parent: Element;
let points: any[]
let words: string[] = ['React', 'NodeJS', 'Redux', 'TypeScript', 'Bootstrap', 'JavaScript', 'Python', 'C++', 'MongoDB', 'ExpressJS', 'REST', 'GIT', 'MUI']
let current: number = 0;
const aboutSketch: {
  preload: (p5: p5Types) => void;
  setup: (p5: p5Types, canvasParentRef: Element) => void;
  draw: (p5: p5Types) => void;
  windowResized: (p5: p5Types) => void;
  mousePressed: (p5: p5Types, event?: MouseEvent) => void;
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
    points = font.textToPoints(words[current], p5.width * 0.19, p5.height * 0.6, 0.15 * p5.width, {
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
    vehicles = [];
    points = font.textToPoints(words[current], p5.width * 0.19, p5.height * 0.6, 0.15 * p5.width, {
      sampleFactor: 0.25,
    });

    for (let pt of points) {
      let vehicle: Vehicle = new Vehicle(pt.x, pt.y, p5);
      vehicles.push(vehicle);
    }
  },

  mousePressed: (p5: p5Types) => {
      
      if (current >= words.length - 1) {
        current = 0
      } else {
        current++
      }
      
      vehicles = [];
      points = font.textToPoints(words[current], p5.width * 0.19, p5.height * 0.6, 0.15 * p5.width, {
        sampleFactor: 0.25,
      });

      for (let pt of points) {
        let vehicle: Vehicle = new Vehicle(pt.x, pt.y, p5);
        vehicles.push(vehicle);
      }

    

  },
};

export default aboutSketch;
