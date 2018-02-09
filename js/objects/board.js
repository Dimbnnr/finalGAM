function Board(canvas,height,width){
  this.x = 0;
  this.y = 0;
  this.width = width;
  this.height = height;
  this.ctx = canvas;
  this.img = new Image() // ?
  this.img.src = images.backgroundImage;
  this.img.onload = function(){
    this.draw();
  }.bind(this); // para que se refiere a 'this' y no a la img que tiene otra ref atras..
  this.draw = function(){ 
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);  // ?
  }
}

