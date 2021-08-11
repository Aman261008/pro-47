var background1;
var bg;
var jet,jet1;
var obstacles1,obstacles1Img,obstacles2,obstacles2Img,obstacles3,obstacles3Img,obstacles4,obstacles4Img;
var bullet;
var alienGroup,aliens,ufoGroup,ufos,cometGroup,comets;

function preload(){
bg=loadImage("images/bg2.jpg");
jet1=loadImage("images/fj.gif");
obstacles1Img=loadImage("images/comet.png");
obstacles2Img=loadImage("images/ufo.png");
obstacles3Img=loadImage("images/alien.png");


alienGroup=new Group();
ufoGroup=new Group();
cometGroup=new Group();



obstacles3=createSprite(random(0,displayWidth),displayHeight/8,50,50);
obstacles3.addImage(obstacles3Img);
obstacles3.scale=0.2;
obstacles3.velocityY=4; 
alienGroup.add(obstacles3);
}

function setup(){
createCanvas(displayWidth,displayHeight);
background1=createSprite(displayWidth,displayHeight);
background1.addImage(bg);

background1.scale=5;

jet =createSprite(displayWidth/2.5,displayHeight/1.1,50,50);
jet.addImage(jet1);
jet.scale=0.2;


console.log(alienGroup+" insetup")

bullet=createSprite(jet.x,jet.y,10,5);

}

function draw(){
    background(255);  

    if(keyIsDown(LEFT_ARROW)){
        jet.x=jet.x-10;
    }
    if(keyIsDown(RIGHT_ARROW)){
        jet.x=jet.x+10;
    }

    if(keyCode===32){
        bullet=createSprite(jet.x,jet.y,10,5);
        bullet.velocityY=-2;
    }


spawnComets();
spawnUFO();  
spawnAlien();
drawSprites();
if(bullet.isTouching(alienGroup) ){
    alienGroup.destroyEach();
}
if(bullet.isTouching(ufoGroup)){
    ufoGroup.destroyEach();
}
if(bullet.isTouching(cometGroup)){
    cometGroup.destroyEach();
}
}
function spawnAlien(){
    if(frameCount%250===0){
        obstacles3=createSprite(random(0,displayWidth),displayHeight/8,50,50);
        obstacles3.addImage(obstacles3Img);
        obstacles3.scale=0.2;
        obstacles3.velocityY=4; 
        alienGroup.add(obstacles3); 
    }
}
function spawnUFO(){
    if(frameCount%380===0){
        obstacles2=createSprite(random(0,displayWidth),displayHeight/8,50,50);
        obstacles2.addImage(obstacles2Img);
        obstacles2.scale=0.2;
        obstacles2.velocityY=4;  
        ufoGroup.add(obstacles2);
    }
}
function spawnComets(){
 
    if(frameCount%450===0){
      obstacles1=createSprite(random(0,displayWidth),displayHeight/8,50,50);
      obstacles1.addImage(obstacles1Img);
      obstacles1.scale=0.2;
      obstacles1.velocityY=4;  
      cometGroup.add(obstacles1);
  }  
}
