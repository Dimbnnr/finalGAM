var myGame;
var canvas;
var frames = 0;
var mezcal = 14;
var mezcal2 = 14;
var players = 0;

var music = new Audio();
music.src = "./Music/cumbiamore.mp3"
var sound1 = new Audio();
sound1.src = "./Music/waterDrop.mp3"
var soundWin = new Audio();
soundWin.src = "./Music/wooHOO.mp3"
var soundBounce = new Audio();
soundBounce.src = "./Music/marless.mp3"

function playSoundBounce(){
  soundBounce.play();
}

function playSound1() {
  sound1.play();
}

function playSoundWin() {
  soundWin.play();
}

function pauseAudio() {
  music.pause();
}

var images = {
  backgroundImage: "./images/desert2.png",
  caballito1Image: "./images/caballito1.png",
  caballito2Image: "./images/Caballito10.png",
  caballito3Image: "./images/Caballito3.png",
  bottleMeteoro: "./images/meteoro-bottle.png",
  gotaBlue: "./images/gota-blue.png",
  gotaBlueChica: "./images/gota-blue-chica.png",
  dropWhite: "./images/drop-white.png",
  emptyBottle: "./images/empty-bottle.png"
}
//Esto carga cuando se abre la ventana window.onload = pour Javascript // $(document).ready(function(){ que es para Jquery

window.onload = function () {
  document.getElementById('onePlayer').onclick = function () {
    canvas = document.getElementById('gameCanvas').getContext('2d');
    players = 1;
    myGame = new Game(canvas);
    music.play();
    keyListenerCaballito();
    interval = setInterval(playersSelection(), 1000 / 60);
  }
  document.getElementById('twoPlayers').onclick = function () {
    canvas = document.getElementById('gameCanvas').getContext('2d');
    players = 2;
    myGame = new Game(canvas);
    music.play();
    keyListenerCaballito();
    interval = setInterval(playersSelection(), 1000 / 60);
 
  }
  
}



function playersSelection(){
  if(players === 1){
   return updateGame;
  } else if (players ===2){
  return  updateGame2;
    }
}

function updateGame() {
  frames++;
  
  //myGame.caballito1.speedX *= myGame.caballito1.friction;
  //myGame.caballito1.speedY *= myGame.caballito1.friction;
  myGame.board.ctx.clearRect(0, 0, 1200, 600)
  myGame.board.draw();
  myGame.caballito1.draw();
  //myGame.caballito2.draw();
  myGame.emptyBottle.draw();
  myGame.emptyBottle.drawLife();
  //myGame.emptyBottle2.draw2();
  //myGame.emptyBottle2.drawLife2();
  canvas.font = "30px Arial";
  canvas.fillText(Math.floor(frames / 8), 100, 150);
  var tiempoBottles = 40;
  var tiempoLessLife = 120;
  var aleatorio = Math.floor(Math.random() * 3);
  if (frames % (tiempoBottles * aleatorio) === 0) generateBottles();
  if (myGame.bottles.length > 0) {
    drawBottles(); // llamar una function que pinta las botellas..
    checkIfDropCollide();
  };
  if (frames % tiempoLessLife === 0) {
    mezcal = mezcal - 0.4;
    console.log(mezcal);
  }
  if (frames % tiempoLessLife === 0) {
    mezcal2 = mezcal2 - 0.4;
    console.log(mezcal2);
  }
  checkScore();

}

function updateGame2() {
  frames++;

  //myGame.caballito1.speedX *= myGame.caballito1.friction;
  //myGame.caballito1.speedY *= myGame.caballito1.friction;
  myGame.board.ctx.clearRect(0, 0, 1200, 600)
  myGame.board.draw();
  myGame.caballito1.draw();
  myGame.caballito2.draw();
  myGame.emptyBottle.draw();
  myGame.emptyBottle.drawLife();
  myGame.emptyBottle2.draw2();
  myGame.emptyBottle2.drawLife2();
  //canvas.font = "30px Arial";
  //canvas.fillText(Math.floor(frames / 8), 100, 150);
  var tiempoBottles = 40;
  var tiempoLessLife = 120;
  var aleatorio = Math.floor(Math.random() * 3);
  if (frames % (tiempoBottles * aleatorio) === 0) generateBottles();
  if (myGame.bottles.length > 0) {
    drawBottles(); // llamar una function que pinta las botellas..
    checkIfDropCollide();
  };
  if (frames % tiempoLessLife === 0) {
    mezcal = mezcal - 0.4;
    console.log(mezcal);
  }
  if (frames % tiempoLessLife === 0) {
    mezcal2 = mezcal2 - 0.4;
    console.log(mezcal2);
  }
  checkScore();

}

function checkIfDropCollide() {
  myGame.bottles.forEach(function (bottle, index) {
    if (myGame.caballito1.checkCollision(bottle)) {
      var bottleReplace = new Bottle(bottle.height);
      bottleReplace.x = bottle.x
      bottleReplace.dropY = -10000;
      myGame.bottles.splice(index, 1, bottleReplace)
      // aqui puedo sumar el mezcal de mi botella y
      mezcal++;
      // dibujar una botella
      // lo que esta adrentro de la botella es un rectangulo
      // que tanto es // lo que le agregas de mezcal
      bottle.visible = false;
      playSound1();
      console.log(mezcal);
    }
    if (myGame.caballito2.checkCollision(bottle)) {
      var bottleReplace = new Bottle(bottle.height);
      bottleReplace.x = bottle.x
      bottleReplace.dropY = -10000;
      myGame.bottles.splice(index, 1, bottleReplace)
      // aqui puedo sumar el mezcal de mi botella y
      mezcal2++;
      // dibujar una botella
      // lo que esta adrentro de la botella es un rectangulo
      // que tanto es // lo que le agregas de mezcal
      bottle.visible = false;
      playSound1();
      console.log(mezcal2);
    }
  });
}

function keyListenerCaballito() {
  document.addEventListener("keydown", function (e) {
    e.preventDefault()
    switch (e.keyCode) {
      case 38:
        myGame.caballito1.moveUp();
        break;
      case 40:
        myGame.caballito1.moveDown();
        break;
      case 37:
        myGame.caballito1.moveLeft();
        break;
      case 39:
        myGame.caballito1.moveRight();
        break;
    }
    switch (e.keyCode) {
      case 90:
        myGame.caballito2.moveUp();
        break;
      case 83:
        myGame.caballito2.moveDown();
        break;
      case 81:
        myGame.caballito2.moveLeft();
        break;
      case 68:
        myGame.caballito2.moveRight();
        break;
    }
  })
};

function checkScore() {
  if (mezcal >= 27) {
    stopGame();
    music.pause();
    playSoundWin();
  } else if (mezcal < 0) {
    stopGame();
    music.pause();
  }
  if (mezcal2 >= 27) {
    stopGame();
    music.pause();
    playSoundWin();
  } else if (mezcal2 < 0) {
    stopGame();
    music.pause();
  }
}

function stopGame() {
  clearInterval(interval);
  if (mezcal >= 27) {
    myGame.caballito1.drawWinner();
    canvas.font='150px Anton'
    canvas.fillStyle= '#48BA95';
    canvas.fillText("WON!", 550, 400);
  } else if (mezcal <= 0) {
    canvas.font='150px Anton'
    canvas.fillStyle= '#48BA95'
    canvas.fillText("BOTTLE EMPTY Sorry!", 150, 400);

  }
  if (mezcal2 >= 27) {
    myGame.caballito2.drawWinner();   
    canvas.font='150px Anton'
    canvas.fillStyle= '#48BA95';
    canvas.fillText("WON!", 550, 400);
  } else if (mezcal2 <= 0) {
    canvas.font='150px Anton'
    canvas.fillStyle= '#48BA95'
    canvas.fillText("BOTTLE EMPTY Sorry!", 150, 400);
  }
}



function checkIfBounce(){
  console.log("holq")
    if(myGame.caballito1.checkCollisionCaba(myGame.caballito2)){
      console.log("zzz")
      playSoundBounce()
      if (myGame.caballito1.posX < myGame.caballito2.posX + myGame.caballito2.width){
        myGame.caballito1.posX-=90;
        myGame.caballito2.posX+=90;
      }
      if(myGame.caballito1.checkCollisionCaba(myGame.caballito2)){
        console.log("zzz")
        playSoundBounce()
       if (myGame.caballito2.posX + myGame.caballito2.width < myGame.caballito1.posX){
        myGame.caballito1.posX+=90;
        myGame.caballito2.posX-=90;
      } 
    }
    }
   if(myGame.caballito1.checkCollisionCaba(myGame.caballito2)){
      playSoundBounce()
      if (myGame.caballito1.posY < myGame.caballito2.posY + myGame.caballito2.height){
        myGame.caballito1.posY+=90;
        myGame.caballito2.posY-=90;
      } else{
        myGame.caballito1.posY-=90;
        myGame.caballito2.posY+=90;
      }
  } 
  
};