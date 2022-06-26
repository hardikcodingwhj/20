
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
var ball,ground,l,r

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(width/2,670,width,20)
l=new Ground (1100,600,20,120)
r=new Ground (1350,600,20,120)


var options={restitution:0.3,friction:0,density:1.2}
ball=Bodies.circle(260,100,20,options)
World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show() 
  l.show()
  r.show()
  ellipse(ball.position.x,ball.position.y,20)

  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}

