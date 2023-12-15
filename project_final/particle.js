class Particle {
  constructor(x, y, size) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.acceleration = createVector(0, 0);
    this.lifespan = 255.0;
    this.size = 4;
  }

  run() {
    this.update();
    this.show();
  }

  applyForce(f) {
    this.acceleration.add(f);
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
    this.acceleration.mult(0);
  }

  // Method to display
  show() {
    stroke(0, this.lifespan);
    strokeWeight(0);
    fill(0, this.lifespan);
    circle(this.position.x, this.position.y, this.size);
  }

  // Is the particle still useful?
  isDead() {
    return this.lifespan < 0.0;
  }
}
