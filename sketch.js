const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage,background1,ground,boy;



function setup() {
 backgroundImage=loadImage("snow2.jpg");
 //console.log(backgroundImage)
}

function draw() {
 engine = Engine.create();
    world = engine.world;
    createCanvas(800,400);
  background1=createSprite(0,0,800,400)  
  background1.addImage(backgroundImage);  
  background1.scale=1.2
 ground= createSprite(100,390, 1327, 20);
 ground.visible=false

 boy =createSprite(100,370,50,100)
 boy.collide(ground);
 boy.isStatic=false;
 if(keyCode=32 && boy.y>= 200) 
 {
 boy.velocityY=-10;  
 }
boy.velocityY=boy.velocityY+0.8;

 

 
 
  drawSprites();
}