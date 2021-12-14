var bg,bgImg;
var player,shooterImg,shooter_shooting ;
var zombie,zombieImg;

var heart1,heart2,heart3;
var heart1Img,heart2Img,heart3Img;

var zombieGroup;

function preload(){
    heart1Img= loadImage("assets/heart_1.png")
    heart2Img= loadImage("assets/heart_2.png")
    heart3Img= loadImage("assets/heart_3.png")

    shooterImg= loadImage("assets/shooter_2.png")
    shooter_shooting =loadImage("assets/shooter_3.png")

    zombieImg=loadImage("assets/zombie1.png")
    bgImg = loadImage("assets/bats.jpg")
    bulletsImg= loadImage("assets/bullets.png")
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
    bg.addImage(bgImg)
    bg.scale=1.1

player = createSprite(displayWidth-1150,displayHeight-200,30,30)
player.addImage(shooterImg)
player.scale =0.3
player.setCollider("rectangle",0,0,300,300)

heart1 =createSprite(displayWidth-100,40,20,20)
heart1.visible = false
heart1.scale = 0.3

heart2 =createSprite(displayWidth-150,40,20,20)
heart2.visible = false
heart2.scale = 0.3

heart3 = createSprite(displayWidth-150,40,20,20)
    heart3.addImage("heart3",heart3Img)
    heart3.scale = 0.3
    

zombieGroup= new Group();
}
function draw(){
    background(0);
    if(keyDown("UP_ARROW")||touches.length>0){
        player.y =player.y-25
    }

   if(keyDown("Down_ARROW")||touches.length>0){
       player.y =player.y+25
   }
    if(keyWentDown("space")){
        player.addImage(shooter_shooting)
    
        bullets =createSprite(displayWidth-1150,player.y-17)
        bullets.addImage(bulletsImg)
        bullets.scale=0.1
        bullets.velocityX=15

    }
 else if(keyWentUp("space")){
     player.addImage(shooterImg)

 }
   
       enemy()






    drawSprites()


}
  function enemy(){
      if(frameCount%100===0){

          zombie =createSprite(random(500,1110),random(100,windowHeight-100),40,40)
          zombie .addImage(zombieImg)
          zombie.scale = 0.5
          zombie.velocityX = -4
          zombie.setCollider("rectangle",0,0,400,400)
          zombie .lifetime =300
          zombieGroup .add(zombie)
      }
  }