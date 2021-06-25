const Engine=Matter.Engine
const World=Matter.World
const Events=Matter.Events
const Bodies=Matter.Bodies


var bgImg,bg,boyImg,boy
var snowFall=[];

function preload() {
  bgImg=loadImage("snow1.jpg");
  // boyImg=loadImage("snowman.png");
}
function setup() {
  createCanvas(1100,650);
  engine=Engine.create();
  world=engine.world;
 
  //   boy=createSprite(550,350,10,10);
  //  boy.addImage("boy playing",boyImg);
}

function draw() {
  background(bgImg);  
  Engine.update(engine);

  if(frameCount%90===0){
    snowFall.push(new SnowFlake(random(100,700),10,10)) ;
   
  }
  for(var c=0;c<snowFall.length;c++){
    snowFall[c].display();
  }
  drawSprites();
}