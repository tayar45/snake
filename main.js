
var bord;
var blockSize=25;
var rows=20;
var cols=20;
var context;
var score=document.getElementById("score")


//remot

var up=document.getElementById("up")
var down=document.getElementById("down")
var right=document.getElementById("right")
var left=document.getElementById("left")


//snake
var snakeX=blockSize*5
var snakeY=blockSize*5
var moveX=0
var moveY=0
var snakeBody=[]
const snakeHead= new Image();
snakeHead.src='snakeBody.jpg'
const snakeBodyImage = new Image();
snakeBodyImage.src='snakeBody.jpg'


// food
const food = new Image();
food.src = 'food.png'

var foodX;
var foodY;

//gameOver
var gameOver=false


window.onload=function () {
   bord=document.getElementById("bord")
   bord.height=rows*blockSize
   bord.width=cols*blockSize
   context = bord.getContext("2d")
   positionFood()
   
 
 //remoteControle
   

  setInterval(update,1000/6)
   
   
}


  function update(){
  
  if (gameOver) {
    return
  }
  
  context.fillStyle="#B2D3C2"
  context.fillRect(0,0,bord.width,bord.height)
  
  
  context.drawImage(food,foodX,foodY,blockSize,blockSize)
  
  if (foodX == snakeX && foodY == snakeY) {
    
    snakeBody.push([foodX,foodY])
    score.innerText=parseInt(score.innerText)+1
    positionFood()
  }
  
  for (var i = snakeBody.length-1;i>0; i--) {
    snakeBody[i]=snakeBody[i-1]
  }
  
  if (snakeBody.length) {
    snakeBody[0]=[snakeX,snakeY]
  }
  
  context.fillStyle = "lime"
  snakeX+=moveX*(blockSize)
  snakeY+=moveY*(blockSize)
  context.drawImage(snakeHead,snakeX, snakeY, blockSize, blockSize)
  
  for (var i = 0; i < snakeBody.length; i++) {
     context.drawImage(snakeBodyImage,snakeBody[i][0],snakeBody[i][1],blockSize,blockSize)
  }
  
  //gameOver
  
  if (snakeX<0 || snakeX>=cols*blockSize||snakeY<0||snakeY>=rows*blockSize) {
    
    alert("game over your Score : "+score.innerText)
    gameOver=true
    location.reload()
    
  }
    
  for (var i = 0; i < snakeBody.length; i++) {
    if (snakeX==snakeBody[i][0]&&snakeY==snakeBody[i][1]) {
    alert("game over your Score : "+score.innerText)
    gameOver=true
    location.reload()
    }
  }
  
  
  
}


function positionFood(){
  foodX = Math.floor(Math.random() * cols) * blockSize
  foodY = Math.floor(Math.random() * rows) * blockSize
  
  
}
left.ontouchend=function(){
  if (moveX==0) {
    moveX=-1
    moveY=0
    snakeHead.src='snakeLeft.jpg'
  }
}
right.ontouchend = function() {
    if (moveX ==0) {
      moveX = 1
      moveY = 0
      snakeHead.src='snakeRight.jpg'
    }
    
}
down.ontouchend=function (){
  if (moveY==0) {
    moveX=0
    moveY=1
    snakeHead.src='snakeDown.jpg'
  }
}

up.ontouchend = function() {
    if (moveY == 0) {
      moveX = 0
      moveY = -1
      snakeHead.src='snakeUp.png'
    }
}



