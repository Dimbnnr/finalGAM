function Game (canvas){
    this.board = new Board (canvas,600, 1200),
    this.caballito1 = new Caballito(canvas, 140, 150, images.caballito3Image),
    this.caballito2 = new Caballito(canvas, 140, 240, images.caballito2Image)
    this.bottles = [],
    this.gotas =[],
    this.frames = 0,
    this.emptyBottle = new EmptyBottle(canvas, 1050, 315),
    this.emptyBottle2 = new EmptyBottle2(canvas, 50, 315)
};   

