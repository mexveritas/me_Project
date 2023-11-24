let emitter;

let repeller;

let attractor;

function setup() {
  createCanvas(400, 400);
  emitter = new Emitter(width / 2, 50);
  // repeller = new Repeller(width / 2, 200);
  attractor = new Attractor(320, height/2);
  

}


function draw() {
  background(220);
  
  fill(0, 100, 0);
  rect(50, 200, 300, 50);
 
  emitter.addParticle();

  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  
  // repeller.position.x = mouseY;
  // repeller.position.y = mouseX;
  
  attractor.position.x = mouseX;
  attractor.position.y = mouseY;

  // emitter.applyRepeller(repeller);
  emitter.applyAttractor(attractor);
  emitter.run();

//   repeller.show();
  attractor.show();
}
