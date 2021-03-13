var bgimg;
var ballon,ballonimg;
var database;

function preload(){
  bgimg=loadImage("Hot Air Ballon-01.png");
  ballonimg=loadImage("Hot Air Ballon-04.png");

}



function setup() {
  database = firebase.database();
  createCanvas(1500,500);
  
 ballon=createSprite(130, 290, 0, 0);
 ballon.addImage(ballonimg);
 ballon.scale=0.9

 //var hypnoticBallPosition = database.ref('ball/position');
 //hypnoticBallPosition.on("value", readPosition, showError);

  

}

function draw() {
  background(bgimg);  
  if(keyDown(LEFT_ARROW)){
    ballon.x=ballon.x-10
    
}
else if(keyDown(RIGHT_ARROW)){
  ballon.x=ballon.x+10
}
else if(keyDown(UP_ARROW)){
  ballon.y=ballon.y-10
  ballon.scale=0.7;
}
else if(keyDown(DOWN_ARROW)){
  ballon.y=ballon.y+10
  ballon.scale=1.1;
}


  drawSprites();
}