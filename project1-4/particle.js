class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-4, 4), random(-2, 2));
    this.acceleration = createVector(0, 0);
    this.lifespan = 500.0;
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
    this.lifespan -= 2;
    this.acceleration.mult(0);
  }

  checkEdge() {
    if (this.position.y > height - 2) {
      this.velocity.y = this.velocity.y * -0.8;
      this.position.y = height - 2;
    }

    if (this.position.y < 0) {
      this.velocity.y = this.velocity.y * -0.8;
      this.position.y = 0 + 2;
    }

    if (this.position.x < 0) {
      this.velocity.x = this.velocity.x * -0.8;
      this.position.x = 0 + 2;
    }

    if (this.position.x > width) {
      this.velocity.x = this.velocity.x * -0.8;
      this.position.x = width -2;
    }
  }

  // Method to display
  show() {
    stroke(0, this.lifespan);
    strokeWeight(2);
    fill(127, this.lifespan);
    circle(this.position.x, this.position.y, 3);
  }

  // Is the particle still useful?
  isDead() {
    return this.lifespan < 0.0;
  }
}
