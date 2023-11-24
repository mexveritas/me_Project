class Attractor {
  constructor(x, y) {
    this.position = createVector(x, y);

    this.power = 50;
  }


  show() {
    stroke(0);
    strokeWeight(2);
    fill(0, 130, 50);
    circle(this.position.x, this.position.y, 30);
  }

  attract(particle) {
 
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 50);
    let strength = this.power / (distance * distance);
    force.setMag(strength);
    return force;
  }
}
