class Venner {
    constructor(){
        this.r = 150;
        this.x = 50;
        this.y = height - 100;
    }
    hits(fjender) {  
        return collideRectRect(this.x, this.y, 50, 50, fjender.x, fjender.y, 50, 50);
     }
     move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - 100);
    }
    show() {
        rect(this.x, this.y, 50, 50);
    }
}