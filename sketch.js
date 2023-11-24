let emitter;

let repeller;

let attractor;

function setup() {
  createCanvas(640, 640);
  emitter = new Emitter(width / 2, 20);
  repeller = new Repeller(width / 2, 200);
  attractor = new Attractor(320, height/2);
}

function draw() {
  background(255);
 
  
  emitter.addParticle();

  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);

  attractor.position.x = mouseY;
  attractor.position.y = mouseX;

  emitter.applyRepeller(repeller);
  emitter.applyAttractor(attractor);
  emitter.run();

  repeller.show();
  attractor.show();
}
