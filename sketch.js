var climberI,climberGroup;
var doorI,doorGroup
var ghostStanding,ghost;
var spookyWavS;
var towerI,tower;
var blockGroup;
var PLAY = 1;
var END = 0
var gameState = PLAY;


function preload(){
  
  climberI = loadImage("climber.png");
  doorI = loadImage("door.png");
  ghostStanding = loadImage("ghost-standing.png");
  spookyWavS = loadSound("spooky.wav");
  towerI = loadImage("tower.png");
  
  
}


function setup(){
  createCanvas(600,600);
  
  tower = createSprite(300,300,20,10);
  tower.addImage("image1",towerI)
  doorGroup = new Group();
  climberGroup = new Group();
  blockGroup = new Group();
  ghost = createSprite(300,300,20,20);
  ghost.addImage("image3",ghostStanding);
  ghost.scale = 0.4;
  spookyWavS.loop();
  tower.velocityY = 5;
  
}

function draw(){
  background("black")
  
  if(gameState === PLAY){
    
    
    
    
   
  //resetting the tower
  if(tower.y>600){
    
    tower.y = 300
    
    
  }
  
 if(keyDown("left")) {
   
   ghost.x = ghost.x-5
   
 }
  
  if(keyDown("right")) {
   
   ghost.x = ghost.x+5
   
 }
  
  if(keyDown("space")){
    
    ghost.velocityY = -5
    
    
  }
  
  ghost.velocityY = ghost.velocityY + 0.5
  
  
     Door();
    
    if(ghost.isTouching(blockGroup)||(ghost.y>600)){
      
      gameState = END;
      
    }
    
    
  }
  
  if(gameState === END){
    
    text("gameOver",300,300);
    
  }
  
  
  
  
  
  
  drawSprites();
 
  
  
}

function Door(){
  
  if(frameCount % 120 ===0 ){
    
    
    var door = createSprite(200,0,10,10);
  var climber = createSprite(200,70,10,10);
  var block = createSprite(200,80,100,10);
  door.addImage("image2",doorI);
  climber.addImage("image3",climberI);
  block.visible = false;
  door.velocityY = 5;
  climber.velocityY = 5;
  block.velocityY = 5;
    
    door.x = Math.round(random(10,580))
    climber.x = door.x
    block.x = climber.x
    
    door.lifetime = 120;
    climber.lifetime = 120;
    block.lifetime = 120;
  
  doorGroup.add(door);
  climberGroup.add(climber);
  blockGroup.add(block);
    
  }
  
  
}
