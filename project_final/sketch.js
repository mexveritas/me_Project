let emitter;

let repeller;
let repellers = [];
let repellerSize = 20;

let attractor;
let attractors = [];
let attractorSize = 20;


var gui;
var guis = [];

function setup() {
  createCanvas(400, 400);
  emitter = new Emitter (width/ 2, height / 2);
  
  for (let i = 0; i < 30; i++) {
    repellers.push(new Repeller(random(width), random(height)));
    }
  
    for (let i = 0; i < 30; i++) {
      attractors.push(new Attractor(random(width), random(height)));
      }

      attractor = attractors[0];

      
  
  gui = QuickSettings.create(10,150,'My Gui');
  gui.addRange('reppower', 1,200,100,0.5);
  gui.addRange('attpower', 1,200,100,0.5);
  gui.addRange('attalpha', 0,255,200,attractor.alpha);
  gui.addRange('repalpha', 0,255,200,repellers[0].alpha);
}


function draw() {
  
  background(255);
  
  
 
  emitter.addParticle();

  let gravity = createVector(0, 0);
  emitter.applyForce(gravity);
  
  attractor.position.x = mouseX;
  attractor.position.y = mouseY;

  for (let repeller of repellers) {
  repeller.power = gui.getRangeValue('reppower');
  repeller.alpha = gui.getRangeValue('repalpha');
  emitter.applyRepeller(repeller);
  repeller.show();
  }
  for (let attractor of attractors) {
  attractor.power = gui.getRangeValue('attpower');
  attractor.alpha = gui.getRangeValue('attalpha');

  emitter.applyAttractor(attractor);
  attractor.show();
  }

  emitter.run();

  for (let i = emitter.particles.length - 1; i >= 0; i--) {
    let particle = emitter.particles[i];
    particle.checkEdge();

  }

  fill(0, 0, 0);
  strokeWeight(0);
  rect(0, 350, 200, 50);

  fill(0, 0, 0);
  strokeWeight(0);
  rect(200, 0, 200, 50);

  fill(0, 0, 0);
  strokeWeight(0);
  rect(300, 200, 100, 300);

  fill(0, 0, 0);
  strokeWeight(0);
  rect(50, 100, 100, 100);

  if (keyIsDown(UP_ARROW)) {
    repellerSize += 1;
  }
  if (keyIsDown(DOWN_ARROW)) {
    repellerSize -= 1;
  }
  for (let repeller of repellers) {
    repeller.setSize(repellerSize);
  }

  if (keyIsDown(LEFT_ARROW)) {
    attractorSize += 1;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    attractorSize -= 1;
  }
  for (let attractor of attractors) {
    attractor.setSize(attractorSize);
  }
  

  }


