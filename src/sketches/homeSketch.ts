import p5Types from "p5";
import {createNoise3D} from 'simplex-noise'
import { cos, fadeInOut, floor, lerp, rand, randRange, sin, TAU } from '../util/util'


const particleCount = 700;
const particlePropCount = 9;
const particlePropsLength = particleCount * particlePropCount;
const rangeY = 100;
const baseTTL = 200;
const rangeTTL = 150;
const baseSpeed = 0.1;
const rangeSpeed = 2;
const baseRadius = 1;
const rangeRadius = 4;
const baseHue = 200;
const rangeHue = 100;
const noiseSteps = 8;
const xOff = 0.00125;
const yOff = 0.00125;
const zOff = 0.0005;






let center: number[] = [];
let tick: number;
let simplex: ReturnType<typeof createNoise3D>;
let particleProps: Float32Array;





function initParticles(p5: p5Types) {
  tick = 0
  simplex = createNoise3D(); 
  particleProps = new Float32Array(particlePropsLength)


  
  for(let i = 0; i < particlePropsLength; i += particlePropCount) {
    initParticle(i, p5)
  }
}




function initParticle(i: number, p5: p5Types) {
    let x: number, y: number, vx: number, vy: number, life: number, ttl: number, speed: number, radius: number,hue: number 
    x =  rand(p5.width)
    y = center[1] +  randRange(rangeY)
    vx = 0
    vy = 0 
    life = 0
    ttl = baseTTL + rand(rangeTTL) 
    speed = baseSpeed + rand(rangeSpeed)
    radius = baseRadius + rand(rangeRadius)
    hue = baseHue + rand(rangeHue)

    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue ], i)

}



function drawParticles(p5: p5Types) {
  for (let i = 0; i < particlePropsLength; i += particlePropCount) {
    updateParticle(i, p5);
  }
}


function updateParticle(i: number, p5: p5Types) {
  let i2=1+i , i3=2+i, i4=3+i, i5=4+i, i6=5+i, i7=6+i, i8=7+i, i9=8+i
  let n: number, x: number, y: number, vx: number, vy: number, life: number, ttl: number, speed: number, radius: number, hue: number, x2: number, y2: number

  x = particleProps[i]
  y = particleProps[i2]
  n = simplex(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU
  vx = lerp(particleProps[i3], cos(n), 0.5)
  vy = lerp(particleProps[i4], sin(n), 0.5)
  life = particleProps[i5]
  ttl = particleProps[i6]
  speed = particleProps[i7]
  x2 = x + vx * speed;
  y2 = y + vy * speed;
  radius = particleProps[i8]
  hue = particleProps[i9]


  drawParticle(x, y, life, ttl, radius, hue, p5)

  life++; 

  particleProps[i] = x2;
  particleProps[i2] = y2;
  particleProps[i3] = vx;
  particleProps[i4] = vy;
  particleProps[i5] = life;

  (checkBounds(x, y, p5) || life > ttl) && initParticle(i, p5);


}






function drawParticle(x: number, y: number, life: number, ttl: number, radius: number, hue: number, p5: p5Types) {
  p5.noStroke()
  let c = p5.color(`hsla(${floor(hue)},100%,60%,${fadeInOut(life, ttl)})`)
  p5.fill(c)
  p5.ellipse(x, y, radius)
}




function checkBounds(x: number, y: number, p5: p5Types) {
    return (
        x > p5.width || 
        x < 0 || 
        y > p5.height || 
        y < 0 
    )
}







const HomeSketch: {
  setup: (p5: p5Types, canvasParentRef: Element) => void;
  draw: (p5: p5Types) => void;
  windowResized: (p5: p5Types) => void;
  mouseMoved: (p5: p5Types, event?: MouseEvent) => void;

} = {

  setup: (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );  
    center[0] = 0.5 * p5.width
    center[1] = 0.5 * p5.height
    initParticles(p5); 
    drawParticles(p5)
  },
  
  draw: (p5: p5Types) => {
    p5.background(15,15,15);
    tick++; 
    drawParticles(p5)

  },

  windowResized: (p5: p5Types) => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight);
    center[0] = 0.5 * p5.width
    center[1] = 0.5 * p5.height
    
  },

  mouseMoved: () => {

  },
  
};

export default HomeSketch;
