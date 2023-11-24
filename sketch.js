let emitter;

let repeller;

function setup() {
  createCanvas(640, 240);
  emitter = new Emitter(width / 2, 20);
  repeller = new Repeller(width / 2, 200);
}

function draw() {
  background(255);
 
  
  emitter.addParticle();

  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);

  repeller.position.x = mouseY;
  repeller.position.y = mouseX;

  emitter.applyRepeller(repeller);
  emitter.run();

  repeller.show();
}
