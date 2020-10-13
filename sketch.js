const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, dustbin1;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,670,width,10);
	paper1 = new Paper(200,450,40);
	dustbin1 = new Dustbin(1400,655,100,20);
	dustbin2 = new Dustbin(1460,620,20,100);
	dustbin3 = new Dustbin(1340,620,20,100);
	
	


	Engine.run(engine);
  
}


function draw() {
  background(0);

  Engine.update(engine);

  keypressed(); 
  


  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  
 
}

function keypressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:750,y:-90})
	}

}



