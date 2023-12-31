let emitter;
let repellers = [];
let attractors = [];

function setup() {
  createCanvas(400, 400);
  emitter = new Emitter(width / 2, height / 2);

  for (let i = 0; i < 10; i++) {
  repellers.push(new Repeller(random(width), random(height)));
  }

  for (let i = 0; i < 10; i++) {
    attractors.push(new Attractor(random(width), random(height)));
    }
}


function draw() {
  background(220);
 
  emitter.addParticle();

  let gravity = createVector(0, 0.001);
  emitter.applyForce(gravity);

  for (let repeller of repellers) {
    emitter.applyRepeller(repeller);
    repeller.show();
  }

  for (let attractor of attractors) {
    emitter.applyAttractor(attractor);
    attractor.show();
  }

  emitter.run();

}