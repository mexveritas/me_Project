class Repeller {
  constructor(x, y) {
    this.position = createVector(x, y);

    this.power = 10;
  }
  
  show() {
    stroke(0);
    strokeWeight(0);
    fill(0, 100, 250);
    circle(this.position.x, this.position.y, 32);
  }

  repel(particle) {
 
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 500);
    let strength = (-1 * this.power) / (distance * distance);
    force.setMag(strength);
    return force;
  }
}
