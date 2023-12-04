let emitter;

let repeller;

let attractor;

let pSlider, nSlider;

let tValue = 10;
let tValueMin = 0;
let tValueMax = 50;
let tValueStep = 2;
let gui;

let params = {
  testValue : 10,
  testValueMin : 0,
  testValueMax : 50,
  testValueStep : 2,
  move : 1,
  moveMin : 0,
  moveMax : 10,
  moveStep : 0.1,
  tColor : [200, 0, 0],
  tChoice : ['apple', 'banana', 'mango']
}

function setup() {
  createCanvas(400, 400);

  pSlider = createSlider(0, 500, 100);
  pSlider.position(10, 320);
  nSlider = createSlider(0, 100, 0);
  nSlider.position(10, 340);
  
  gui = createGui('test slider');
  // sliderRange(0, 100, 2);
  // gui.addGlobals('tValue');
  
  gui.addObject(params);
  gui.setPosition(310, 10);
  emitter = new Emitter(width / 2, height / 2);
  repeller = new Repeller(width / 2, 300);
  attractor = new Attractor(width /2 , height/2);
}


function draw() {
  background(220);

  repeller.setPower(params.testValue);
  repeller.move(params.move);
  
  for (let i=0; i<nSlider.value(); i++) {
    emitter.addParticle(params.tColor);  
  }
 
  emitter.addParticle();

  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  
  // repeller.position.x = mouseY;
  // repeller.position.y = mouseX;
  
  attractor.position.x = mouseX;
  attractor.position.y = mouseY;

  emitter.applyRepeller(repeller);
  emitter.applyAttractor(attractor);
  emitter.run();

  repeller.show();
  attractor.show();
}
