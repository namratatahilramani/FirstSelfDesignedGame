var bgImg,bg;


function preload(){
	bgImg=loadImage("bg2.jpeg");
	boyrunning=loadAnimation("boy4.png","boy5.png","boy6.png","boy8.png");
}

function setup() {
	createCanvas(800, 500);

	bg=createSprite(400,250,800,600);
	bg.addImage("bg",bgImg);
	bg.scale=1.6;
	bg.velocityX=2;

	boy=createSprite(150,380,30,70);
	boy.addAnimation("Running",boyrunning);
}


function draw() {
  
  background(255);
  if(bg.x>400){
	  bg.x=100;
  }
  drawSprites();
 
}



