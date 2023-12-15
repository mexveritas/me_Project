class Repeller {
  constructor(x, y, power, alpha) {
    this.position = createVector(x, y);

    this.power = 150;
    this.power = power;
    this.alpha = alpha;
  }
  
  show() {
    stroke(0);
    strokeWeight(0);
    fill(0, 0, 200, this.alpha);
    circle(this.position.x, this.position.y, 20);
  }

  repel(particle) {
 
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 50);
    let strength = (-1 * this.power) / (distance * distance);
    force.setMag(strength);
    return force;
  }
}
