let emitter;

let repeller;

let attractor;


var gui;
var guis = [];

function setup() {
  createCanvas(600, 600);
  emitter = new Emitter (width/ 2, height / 2);
  repeller = new Repeller(width / 2, 400);
  attractor = new Attractor(width /2 , height/2);
  
  gui = QuickSettings.create(10,150,'My Gui');
  gui.addRange('reppower', 1,50,1,1);
  gui.addRange('attpower', 1,200,1,1);
}


function draw() {
  background(220);
 
  emitter.addParticle();

  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  
  attractor.position.x = mouseX;
  attractor.position.y = mouseY;
  repeller.power = gui.getRangeValue('reppower');
  attractor.power = gui.getRangeValue('attpower');

  emitter.applyRepeller(repeller);
  emitter.applyAttractor(attractor);
  emitter.run();

  repeller.show();
  attractor.show();
}
