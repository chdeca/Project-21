const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var left, right, ground, top_wall;

var ball;

var b1, b2;

function setup() {
  createCanvas(1600,700);
  engine = Engine.create();
  
  world = engine.world;

  ground = new Ground (width/2, 670, width, 20);
  left = new Ground (1100, 600, 20, 120);
  right = new Ground (1350, 600, 20, 120);
 

  ball_options = {
    restitution : 0.3,
    isStatic:false,
    friction: 0
  }

  ball = Bodies.circle (460,100,20,ball_options);
  World.add (world, ball);

Engine.run (engine)
  
}

function draw() 
{
  rectMode (CENTER)
  background(51);

  ground.show ()
  left.show ();
  right.show ();

  ellipse (ball.position.x, ball.position.y, 20, 20)
  Engine.update(engine);
}

function keyPressed () {
  if (keyCode=== UP_ARROW) {
    Matter.Body.applyForce (ball, ball.position, {x:85, y:-85})
  }

}



