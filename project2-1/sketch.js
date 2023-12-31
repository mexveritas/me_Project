let emitter;

let repeller;

let attractor;

let Slider;

function setup() {
  createCanvas(400, 400);

  textSize(15);
  noStroke();

  // create sliders
  Slider = createSlider(0, 255, 50);
  Slider.position(20, 20);

  emitter = new Emitter(width / 2, height / 2);
  repeller = new Repeller(width / 2, 300);
  attractor = new Attractor(width /2 , height/2);
}


function draw() {
  background(255);
  const particleSize = Slider.value();
  
  text('particle size', Slider.x * 2 + Slider.width, 35);
 
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
  attractor.show(particleSize);
}
