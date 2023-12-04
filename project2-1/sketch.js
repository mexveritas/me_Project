let emitter;

let repeller;

let attractor;

function setup() {
  createCanvas(400, 400);

  textSize(15);
  noStroke();

  // create sliders
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);

  emitter = new Emitter(width / 2, height / 2);
  repeller = new Repeller(width / 2, 300);
  attractor = new Attractor(width /2 , height/2);
}


function draw() {
  background(220);

  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  background(r, g, b);
  text('red', rSlider.x * 2 + rSlider.width, 35);
  text('green', gSlider.x * 2 + gSlider.width, 65);
  text('blue', bSlider.x * 2 + bSlider.width, 95);
 
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
