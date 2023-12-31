let emitter;

let repeller;

let attractor;

function setup() {
  createCanvas(400, 400);
  emitter = new Emitter(width / 2, height / 2);
  repeller = new Repeller(width / 2, 300);
  attractor = new Attractor(width /2, height / 2);
}

function draw() {
  background(220);
 
  
  emitter.addParticle();

  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);

  attractor.position.x = mouseY/2;
  attractor.position.y = mouseX/2;

  emitter.applyRepeller(repeller);
  emitter.applyAttractor(attractor);
  emitter.run();

  repeller.show();
  attractor.show();
}
