const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;
var canvas;

function setup() {
  canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;


//create a object for ball
ball= new Ball(440, 250, 50, 50);

//create a object for blower
blower= new Blower(440, 450, 100, 85)
//create a object for blowerMouth
blowerMouth= new BlowerMouth(440, 355, 50, 100)

  btn2 = createImg('click.png');
btn2.position(20,30);
btn2.size(100,100);
//add the mouseClicked option 
btn2.mouseClicked(blow)


}
 
function draw() {
  background("lightgray");


  blower.show();
  ball.show();
  blowerMouth.show();

  Engine.update(engine);

  

  
}
function blow(){
  Matter.Body.applyForce(ball.body, {x: 0, y:0}, {x: 0, y: 0.01})
}


