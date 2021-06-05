var bg1,bg,bgimg;


function setup(){
  bg=loadImage("sprites/snow.1jpg");
  
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  bg1=addImage("bg");
}

function draw() {
  background(bg1);  
  drawSprites();
}
