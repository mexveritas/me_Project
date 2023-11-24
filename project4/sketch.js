let emitter;

let repeller;

let attractor;

function setup() {
  createCanvas(400, 400);
  emitter = new Emitter(width / 2, 50);
  repeller = new Repeller(100, height / 2);
  attractor = new Attractor(300, height / 2);
}


function draw() {
  background(220);
 
  emitter.addParticle();

  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  
  emitter.applyRepeller(repeller);
  emitter.applyAttractor(attractor);
  emitter.run();

  repeller.show();
  attractor.show();

  if (keyIsDown(UP_ARROW)) {
    attractor.power += 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    attractor.power -= 5;
  }
}
