let emitter;

let repeller;
let repellers = [];

let attractor;
let attractors = [];


var gui;
var guis = [];

function setup() {
  createCanvas(600, 600);
  emitter = new Emitter (width/ 2, height / 2);
  
  for (let i = 0; i < 10; i++) {
    repellers.push(new Repeller(random(width), random(height)));
    }
  
    for (let i = 0; i < 10; i++) {
      attractors.push(new Attractor(random(width), random(height)));
      }

      attractor = attractors[0];
  
  gui = QuickSettings.create(10,150,'My Gui');
  gui.addRange('reppower', 1,300,150,1);
  gui.addRange('attpower', 1,300,150,1);
  gui.addRange('attalpha', 0,255,200,attractor.alpha);
}


function draw() {
  background(220);
 
  emitter.addParticle();

  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  
  attractor.position.x = mouseX;
  attractor.position.y = mouseY;

  for (let repeller of repellers) {
  repeller.power = gui.getRangeValue('reppower');
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
}
