

function preload(){
  enemyImg=loadImage("enemy_ship.png")
  spaceCraftImg=loadImage("spacecraft.png")
  spaceCraft1Img=loadImage("spacecraft1.png")
  bgImg=loadImage("bg.png")
  bg2Img=loadImage("bg2.png")
}






function setup() {
  createCanvas(windowWidth,windowHeight);

spaceCraft1=  createSprite(700,450, 50, 50);
spaceCraft1.addImage("spaceCraft1",spaceCraft1Img)
}

function draw() {
   background("#00002B"); 
  if(keyIsDown(RIGHT_ARROW)){
    spaceCraft1.velocityX=2
  }

  if(keyIsDown(LEFT_ARROW)){
    spaceCraft1.velocityX=-2
  }


 
  drawSprites();
}