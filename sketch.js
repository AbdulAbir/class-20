var movingPaddle;
var fixedPaddle;


function setup() {
  createCanvas(800,800);
  movingPaddle = createSprite(400, 200, 100, 50);
   movingPaddle.shapeColor ="green";
  fixedPaddle = createSprite(200, 400, 50, 100);
  fixedPaddle.shapeColor ="green";
}

function draw() {
  background("pink");

  movingPaddle.y = mouseY;
  movingPaddle.x = mouseX;

  if(movingPaddle.x - fixedPaddle.x < movingPaddle.width/2 + fixedPaddle.width/2
     &&  fixedPaddle.x - movingPaddle.x < movingPaddle.width/2 + fixedPaddle.width/2
     &&   movingPaddle.y - fixedPaddle.y  < movingPaddle.width/2 + fixedPaddle.width/2  
     &&  fixedPaddle.y - movingPaddle.y < movingPaddle.width/2 + fixedPaddle.width/2)
     {
      movingPaddle.shapeColor ="red";
      fixedPaddle.shapeColor ="red";
     }
     else
     {
      movingPaddle.shapeColor ="green";
      fixedPaddle.shapeColor ="green";
     
     
     }
   
  drawSprites();
}