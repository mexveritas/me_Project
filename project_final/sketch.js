let emitter;

let repeller;

let attractor;


var gui;
var guis = [];

function setup() {
  createCanvas(600, 100);
  emitter = new Emitter (width/ 2, height / 2);
  repeller = new Repeller(width / 2, 100);
  attractor = new Attractor(width /2 , height/2, 500);
  
  gui = QuickSettings.create(10,150,'My Gui');
  gui.addRange('reppower', 1,300,1,1);
  gui.addRange('attpower', 1,300,1,1);
  gui.addRange('attalpha', 0,255,1,attractor.alpha);
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
  attractor.alpha = gui.getRangeValue('attalpha');

  emitter.applyRepeller(repeller);
  emitter.applyAttractor(attractor);
  emitter.run();

  repeller.show();
  attractor.show();
}
