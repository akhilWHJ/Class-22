const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var akhilWorld, akhilEngine;
var akhilBody;
var ground;

function setup() {
  createCanvas(800,400);
  akhilEngine = Engine.create();
  akhilWorld = akhilEngine.world;
options = {
isStatic: false,
restitution: 2.0


}
  akhilBody = Bodies.circle (100,200,50,options);
  World.add(akhilWorld, akhilBody);
  console.log (akhilBody.position.x, akhilBody.position.y );
  optionground = {
isStatic: true

  }

ground = Bodies.rectangle(400,380, 800, 20, optionground);
World.add (akhilWorld,ground);



}

function draw() {
  background(0);  
  Engine.update(akhilEngine);
  rectMode(CENTER);
  ellipseMode(CENTER);

  ellipse(akhilBody.position.x, akhilBody.position.y,100,100);
rect (ground.position.x, ground.position.y, 800,20);

}