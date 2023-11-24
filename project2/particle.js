class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.acceleration = createVector(0, 0);
    this.lifespan = 255.0;
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
    this.checkEdge();
    
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 0.5;
    this.acceleration.mult(0);
  }
  
  
  checkEdge() {
    if (this.position.y > height - 8) {
      this.velocity.y = this.velocity.y * -1;
      this.position.y = height - 8;
    }

    if (
      this.position.x > 50 -4 &&
      this.position.x < 50 + 300 -4 &&
      this.position.y > 200 - 4 &&
      this.position.y < 200 + 50
    ) {

      this.velocity.y = this.velocity.y * -1;
      this.position.y = 200;
    }
    
    
    if (this.position.x > width) {
      this.velocity.x = this.velocity.x * -1;
      this.position.x = width;
    }
    if (this.position.x < 0) {
      this.velocity.x = this.velocity.x * -1;
      this.position.x = 0;
    }
  }

  // Method to display
  show() {
    stroke(0, this.lifespan);
    strokeWeight(1);
    fill(127, this.lifespan);
    circle(this.position.x, this.position.y, 8);
  }

  // Is the particle still useful?
  isDead() {
    return this.lifespan < 0.0;
  }
}
