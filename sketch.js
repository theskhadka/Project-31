const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(490,800);
  engine = Engine.create();
  world = engine.world;

  for (var k = 0; k<=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <=width; j=j+50) {
    plinkos.push(new Plinko(j, 75, 10));
  }
  for (var j = 15; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j, 175, 10))
  }
  for (var j = 40; j <=width; j=j+50) {
    plinkos.push(new Plinko(j, 275, 10));
  }
  for (var j = 15; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j, 375, 10))
  }

  ground = new Ground(240, 800, 480, 20)
}

function draw() {
  background(25, 21, 34);
  Engine.update(engine);

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  if (frameCount%90===0) {
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var l = 0; l < plinkos.length; l++) {
    plinkos[l].display();
  }

  ground.display();

  drawSprites();
}