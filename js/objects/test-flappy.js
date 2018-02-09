var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var images = {
  bg:"http://hugoware.net/resource/images/misc/game-background.jpg",
  flappy:"http://www.idoctormt.com/wp-content/uploads/2016/04/Flappy-Bird.png",
  topPipe:"https://raw.githubusercontent.com/ironhack-labs/lab-canvas-flappybirds/master/starter_code/images/obstacle_top.png",
  bottomPipe:"https://raw.githubusercontent.com/ironhack-labs/lab-canvas-flappybirds/master/starter_code/images/obstacle_bottom.png"
};

//main variables
var board;
var flappy;
var interval;
var pipes = [];
var frames = 0;

//Clases
function Collision(){
  this.crashWith = function(pipe){
    return (this.x < pipe.x + pipe.width) &&
    (this.x + this.width > pipe.x) &&
    (this.y < pipe.y + pipe.height) &&
    (this.y + this.height > pipe.y)

  }
}


function Pipe(y, height, which){
  this.x = canvas.width;
  this.y = y;
  this.width = 50;
  this.height = height;
  
  this.img = new Image();
  this.img.src = which ? images.topPipe:images.bottomPipe;
  this.img.onload = function(){
    this.draw();
  }.bind(this);
  this.draw = function(){
    ctx.drawImage(this.img, this.x,this.y,this.width,this.height);
    this.x--;
  }
}


function Flappy(){
  Collision.call(this);
  this.x = 100;
  this.y = 100;
  this.width = 40;
  this.height = 30;
  this.speed = 0;
  this.img = new Image();
  this.img.src = images.flappy;
  this.img.onload = function(){
    this.draw();
  }.bind(this);
  this.draw = function(){
   this.y+=this.speed; 
    this.speed++;   ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
  }
  this.getUp = function(){
    this.y-=20;
    this.speed = 0;
  }
}

function Board(){
  this.x = 0;
  this.y = 0;
  this.width = canvas.width;
  this.height = canvas.height;
  this.img = new Image();
  this.img.src = images.bg;
  this.img.onload = function(){
    this.draw();
  }.bind(this);
  //mas importante de todos:
  this.draw = function(){
    ctx.drawImage(this.img, this.x,this.y, this.width, this.height);
  }
}

//Main function
function startGame(){
  //se debe resetear todo!!!! 
  frames = 0;
  pipes = [];
  board = new Board();
  flappy = new Flappy();
  interval = setInterval(updateGame,1000/20);
}

function updateGame(){
  //contar:
  frames++;
  //Borrar todo antes
  ctx.clearRect(0,0,canvas.width,canvas.height);
  //chars
  board.draw();
  flappy.draw();
  //get the pipes
  drawPipes();
  ctx.font = "50px Arial";
  ctx.fillText(Math.floor(frames/8), 100,150);
  checkIfCrash();
}

function generatePipes(){
  var height = Math.floor((Math.random()*150)+50);
  pipes.push(new Pipe(0,height,true));
  pipes.push(new Pipe(height+100,canvas.height - height - 100,false))
}

function drawPipes(){
  if(frames % 120 === 0) generatePipes();
  pipes.forEach(function(pipe){
    pipe.draw();
  });
}

//checar colisiones
function checkIfCrash(){
  pipes.forEach(function(pipe){
    if(flappy.crashWith(pipe)){
      stopGame();
    }
  });
}

function stopGame(){
  clearInterval(interval);
  ctx.fillText("GAME OVER",200,100);
}




//Listeners (user input)
// addEventListener("mousemove", function(e){
  //flappy.x = e.clientX - 20;
  //flappy.y = e.clientY - 15;
//})

addEventListener("keydown", function(e){
  if(e.keyCode===27){
    startGame();
  }
  if(e.keyCode === 32){
    flappy.getUp();
  }
});


//esto inicia todo
startGame();

