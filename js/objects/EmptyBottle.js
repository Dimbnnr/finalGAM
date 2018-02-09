function EmptyBottle(canvas, x, y) {
    this.x = x;
    this.y = y;
    this.width = 105;
    this.height = 265;
    this.ctx = canvas;
    this.img = new Image();
    this.img.src = images.emptyBottle;
    this.img.onload = function () {
        this.draw();
    }.bind(this);
    this.draw = function () {
        myGame.board.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    this.ctx.fillRect(1063, 565, 80, 5);
    this.ctx.fillStyle = "#D5EEFF";

    this.drawLife = function () {
        var beginY = 564;
        var widthMiniMezc = 76;
        var xMiniMezc = 1063;
        if (mezcal <= 27) {
            for (var i = 0; i <= mezcal; i++) {

                if (i < 23 ){
                this.ctx.fillRect(1063, beginY, 80, 6);
                this.ctx.fillStyle = "#D5EEFF";
                beginY -= 6;
                }
                else if (i >=23){
                    console.log('hola k ase')
                    
                    this.ctx.fillRect(xMiniMezc, beginY, widthMiniMezc, 6);
                    this.ctx.fillStyle = "#D5EEFF";
                    widthMiniMezc -= 4;
                    xMiniMezc += 2;
                    beginY -= 6;
                }
            }
        }
        

    }
}