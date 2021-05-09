class BaseVen {      // Classen med alle dens egenskaber
    constructor() {
        this.r = 50;
        this.x = 50;
        this.y = height - 150;
        
    }

   // her kan vi få classen Fjende til at bevæge sig

        
    
    // viser billedet
    show() {
        
        image(bImg, this.x, this.y, 100, 100);
        
    }
}