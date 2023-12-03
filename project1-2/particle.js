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

  update() {
    this.checkEdge();
    
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 0.5;
    this.acceleration.mult(0);
  }
  
  
  checkEdge() {
    if (this.position.y > height - 2) {
      this.velocity.y = this.velocity.y * -1;
      this.position.y = height - 2;
    }

    if (
      this.position.y > 200-2 &&
      this.position.y < 250 +2 &&
      this.position.x > 50 &&
      this.position.x < 350) 
      {
      this.velocity.y = this.velocity.y * -1;
      this.position.y = 200;
  
    }

  }

  // Method to display
  show() {
    // stroke(0, this.lifespan);
    strokeWeight(0);
    fill(50, this.lifespan);
    circle(this.position.x, this.position.y, 2);
  }

  // Is the particle still useful?
  isDead() {
    return this.lifespan < 0.0;
  }
}
