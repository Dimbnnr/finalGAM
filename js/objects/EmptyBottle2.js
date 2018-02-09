function EmptyBottle2(canvas, x, y) {
    this.x = x;
    this.y = y;
    this.width = 105;
    this.height = 265;
    this.ctx = canvas;
    this.img = new Image();
    this.img.src = images.emptyBottle;
    this.img.onload = function () {
        this.draw2();
    }.bind(this);
    this.draw2 = function () {
        myGame.board.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    this.ctx.fillRect(63, 565, 80, 5);
    this.ctx.fillStyle = "#D5EEFF";

    this.drawLife2 = function () {
        var beginY = 564;
        var widthMiniMezc = 76;
        var xMiniMezc = 63;
        if (mezcal2 <= 27) {
            for (var i = 0; i <= mezcal2; i++) {

                if (i < 23 ){
                this.ctx.fillRect(63, beginY, 80, 6);
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