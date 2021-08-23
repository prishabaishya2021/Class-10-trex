var trex;
function preload(){
  trexrunning=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundone=loadImage("ground2.png")
}
function setup() 
{
  createCanvas(600,200);
trex=createSprite(50,160,20,50);
trex.addAnimation("running",trexrunning)
edges=createEdgeSprites()
trex.scale=0.5    

//ground sprite
ground=createSprite(200,180,400,20)
ground.velocityX=-2
ground.addImage("moving",groundone)
ground.x=ground.width/2
}     

function draw() 
{
background(180);
if(keyDown("space")){
  trex.velocityY=-10
}
console.log(ground.x)

//dina falls down so resets its positions
if(ground.x<0){
  ground.x=ground.width/2

}
//gravity
trex.velocityY=trex.velocityY+0.5
trex.collide(ground)
drawSprites()
}         

