import p5Types, { Vector } from "p5";
import { rand } from "../util/util";


export class Vehicle {
    pos: Vector
    target: Vector
    vel: Vector
    acc: Vector
    r: number
    maxspeed: number
    maxForce: number
    constructor(x: number, y: number, p5: p5Types) {
        this.pos = p5.createVector(rand(p5.width), rand(p5.height))
        this.target = p5.createVector(x, y)
        this.vel = p5.createVector(rand(100), rand(100))
        this.acc = p5.createVector()
        this.r = 8;
        this.maxspeed = 10
        this.maxForce = 2
    }

    behaviors(p5: p5Types) {
        let arrive = this.arrive(this.target, p5)
        let mouse = p5.createVector(p5.mouseX, p5.mouseY)
        let flee = this.flee(mouse, p5)

        arrive.mult(1)
        flee.mult(5)

        this.applyForce(arrive)
        this.applyForce(flee)
    }

    arrive(target: Vector, p5: p5Types) {
        let desired = Vector.sub(target, this.pos)
        let d = desired.mag()
        let speed = this.maxspeed
        if (d < 100) {
            speed = p5.map(d, 0, 100, 0, this.maxspeed)
        }
        desired.setMag(speed)
        let steer = Vector.sub(desired, this.vel)
        steer.limit(this.maxForce)
        return steer

    }

    flee(target: Vector, p5: p5Types) {
        let desired = Vector.sub(target, this.pos)
        let d = desired.mag()
        if (d < 50) {
            desired.setMag(this.maxspeed)
            desired.mult(-1)
            let steer = Vector.sub(desired, this.vel)
            steer.limit(this.maxForce)
            return steer;
        } else {
            return p5.createVector(0, 0)
        }

    }

    applyForce(f: Vector) {
        this.acc.add(f)
    }

    update() {
        this.pos.add(this.vel)
        this.vel.add(this.acc)
        this.acc.mult(0)
    }


    render(p5: p5Types) {
        p5.stroke(255)
        p5.strokeWeight(8)
        p5.point(this.pos.x, this.pos.y)
    }

}