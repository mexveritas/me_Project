let emitters = [];
let repellers = [];
let attractors = [];

function setup() {
  createCanvas(400, 400);
  emitter = new Emitter(width / 2, height / 2);

  for (let i = 0; i < 7; i++) {
  repellers.push(new Repeller(random(width), random(height)));
  }

  for (let i = 0; i < 7; i++) {
    attractors.push(new Attractor(random(width), random(height)));
    }
}

function draw() {
  background(220);

  for (let emitter of emitters) {
    emitter.addParticle();
    let gravity = createVector(0, 1);
    emitter.applyForce(gravity);
  }

  for (let repeller of repellers) {
    emitter.applyRepeller(repeller);
    repeller.show();
  }

  for (let attractor of attractors) {
    emitter.applyAttractor(attractor);
    attractor.show();
  }

}

function mouseClicked() {
  let mpos = createVector(mouseX, mouseY);
  let newEmitter = new Emitter(mpos.x, mpos.y);
  emitters.push(newEmitter);
}