// canvas creator

var canvas= document.getElementById('myCanvas');
var context= canvas.getContext('2d');
var y= 0;
var x = 27;
var paddleX=100;
var Score=0;

var rightPressed= false;
var leftPressed= false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e){
  if(e.keyCode==39){
    rightPressed=true;
  }
  if(e.keyCode==37){
    leftPressed=true;
  }
}

function keyUpHandler(e){
    if(e.keyCode==39){
      rightPressed=false;
    }
    if(e.keyCode==37){
      leftPressed=false;
    }
}



function draw(){
  context.clearRect(0, 0, 480, 320);
  //draw circle
  context.beginPath();
  context.arc(x, y, 10, 0, Math.PI*2);
  context.fillStyle= "#FFFFFF";
  context.fill();
  context.closePath();

//draw paddle
context.beginPath();
context.rect(paddleX, 310, 90, 10);
context.fillStyle= "#FFFFFF";
context.fill();
context.closePath();

//draw score
context.font="16px Arial";
context.fillStyle="#FFFFFF";
context.fillText("Score:"+Score,0,20);


  y +=2;

  if ((y>310)&&((x>paddleX-45) && (x<paddleX+45))){
    y=0;
    x= Math.random() * (canvas.height);
    Score++;
  }

  if(rightPressed){
    paddleX +=7;
  }
  if(leftPressed){
    paddleX -=7;
  }

  if (y>320){
    y=0;
    x= Math.random() * (canvas.height);
    console.log(x);
  }
}

setInterval(draw, 10);
