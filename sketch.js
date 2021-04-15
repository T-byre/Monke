
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,600);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  
  bananaGroup = new Group();
  
}


function draw() {
  background("white");
  
  stroke("white")
  textSize(20)
  fill("white")
  
  stroke("black")
  textSize(20)
  fill("black")
  
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Lifetime: " + survivalTime,250,50)
  
  
  
  ground.x = ground.width/2
  
  monkey.collide(ground);
  monkey.velocityY = monkey.velocityY + 0.8
  
  if(keyDown("space")){
    monkey.velocityY = -12
  }
  
  food();
  obstacles()

  drawSprites();
}

function food(){
  if(World.frameCount%80===0){
    banana = createSprite(600,200,10,10);
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.velocityX = -5
    banana.lifeTime = 100
    
    bananaGroup.add(banana)
    
  }
}

function obstacles(){
  if(World.frameCount%300===0){
    obstacle = createSprite(600,320,20,20);
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.15
    obstacle.velocityX = -5
  }
}






