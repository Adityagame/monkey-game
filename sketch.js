
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1;
 
ground=createSprite(400,350,900,10);  
ground.velocityX=-4;  
  FoodGroup=new Group();
  obstacleGroup=new Group();
  survivalTime=0;
}


function draw() {
background("white");
  
if (keyDown("space"))  {
monkey.velocityY=-12;  
}
monkey.velocityY=monkey.velocityY+0.8; 
  
monkey.collide(ground);  
    
if (ground.x < 0) {
  ground.x=ground.width/2;
} 
  survivalTime=survivalTime+1
  text("survivalTime"+survivalTime,300,50)
 bananas(); 
 obstacles(); 
drawSprites(); 
}

function bananas () {
 if (frameCount % 80 === 0) {
   banana=createSprite(400,100)
   banana.y = Math.round(random(120,200));
   banana.addImage(bananaImage);
   banana.velocityX=-7;
   banana.scale=0.1;
   banana.lifetime=300;
   FoodGroup.add(banana);
 } 
  
}

function obstacles () {
 if (frameCount % 100 === 0) {
   obstacle=createSprite(400,340);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX=-3;
   obstacle.scale=0.1;
   obstacle.lifetime=300;
   obstacleGroup.add(obstacle);
 }
}



