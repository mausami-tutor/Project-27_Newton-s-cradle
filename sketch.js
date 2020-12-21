
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var bobDiameter=60
function preload()
{
	
}
var top
function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  roof=new Roof(400,100,400,40)
	 bob1= new Bob(260,350)
	 bob2= new Bob(320,350)
	 bob3= new Bob(380,350)
	 bob4= new Bob(440,350)
	 bob5= new Bob(500,350)

	 rope1=new Rope(bob1.body, roof.body, -bobDiameter*2,0 )
	 rope2=new Rope(bob2.body, roof.body, -bobDiameter*1,0 )
	 rope3=new Rope(bob3.body, roof.body, -bobDiameter*0,0 )
	 rope4=new Rope(bob4.body, roof.body, bobDiameter*1,0 )
	 rope5=new Rope(bob5.body, roof.body, bobDiameter*2,0 )

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  roof.display();
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  //drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(bob1.body, bob1.position,{x: -250,y:0})
	}
}


