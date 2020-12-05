const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(400, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	umbrella = new Umbrella(200,200,30,30);
	drop = new Drop(200,200,10,10);
	thunder = new Thunder(20,20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER)


}