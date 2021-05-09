class Fjender {
    constructor(){
        this.r = 150;
        this.x = 500;
        this.y = height - 100;
    }
    
     move() {
       this.x -= 5;
    }
    show() {
        rect(this.x, this.y, 50, 50);
    }
}