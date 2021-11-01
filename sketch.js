let theShader;
let particles = [];

function preload() {
  theShader = loadShader("shader.vert", "shader.frag");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  pixelDensity(1);
  for (i = 0; i < 10; i++)
    particles.push(new Particle(random(0, width), random(0, height)));
}

function draw() {
  theShader.setUniform("u_resolution", [width, height]);
  
  const positions = particles.map((p) => [p.x, p.y]);
  theShader.setUniform("u_blob", positions.flat());

  for (i = 0; i < particles.length; i++) {
    particles[i].update();
  }
  shader(theShader);
  rect(0, 0, width, height);
}
