
function Caballito(canvas, X, Y, imagen){
    this.posX = X;
    this.posY = Y;
    this.speedX = 55;
    this.speedY = 55;
    this.friction = .99;
    this.width = 40;
    this.height = 65;
    this.speed;
    this.ctx = canvas;
    this.img = new Image();
    this.img.src = imagen;
    this.img.onload = function(){
        this.draw();
    }.bind(this);
    this.draw = function(){
        this.ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height);
    }
    this.drawWinner = function(){
     this.ctx.drawImage(this.img,400,250, 100,162);
      
    }
    this.checkCollision = function(bottle){
        return (this.posX < bottle.x + 50) &&
                (this.posX + this.width > bottle.x + 50) &&
                (this.posY < (bottle.dropY-130) + bottle.height - 80) &&
                (this.posY + this.height > (bottle.dropY))
    },
    this.checkCollisionCaba = function(cab){
      return (this.posX < cab.posX + cab.width) &&
              (this.posX + this.width > cab.posX) &&
              (this.posY <  cab.posY + cab.height) &&
              (this.posY + this.height > cab.posY)
    
    }
    
}


Caballito.prototype.moveUp = function(){
    if(this.posY > 0 + this.height/4){
      this.posY -= this.speedY;
      checkIfBounce();
    }else{
      return;
    }
  }
  Caballito.prototype.moveDown = function(){
    if(this.posY + this.height/2< myGame.board.height - this.height){
      this.posY += this.speedY;
      checkIfBounce();
    }else{
      return;
    }
  }
  Caballito.prototype.moveLeft = function(){
    if(this.posX > 0 + this.width){
      this.posX -= this.speedX;
      checkIfBounce();
    }else{
      return;
    }
  }
  Caballito.prototype.moveRight = function(){
    if(this.posX < myGame.board.width - this.width){
      this.posX += this.speedX;
      checkIfBounce();
    }else{
      return;
    }
  }

  