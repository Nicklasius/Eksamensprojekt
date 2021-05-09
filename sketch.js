let menu = 0;
let gold = 0;
let hits = false;
let img1; 
let venner = [];
let fjender = [];
function preload() {
    img1 = loadImage('libraries/scene.jpg');
    bImg = loadImage('libraries/Base.png');
}

function setup() {

    createCanvas(1360,500);
    background(25);
    baseI = new BaseVen();
}

function draw() {
  console.log(menu)
    print(mouseX, mouseY)
if (menu == 0) {
    background(25);
    fill(100, 210, 0);
    rect( width/2 - 70, height/2 - 100, 200, 75);
    fill(255, 0, 155);
    rect( width/2 - 60, height/2, 180, 60);
    fill(255, 0, 0);
    rect( width/2 - 60, height/2 + 140, 180, 60);
    textSize(50)
    fill(255);
    text('START', width/2 - 50, height/2 - 50);
    text('EXIT', 655, 435);
    textSize(38);
    text('OPTIONS', 625, 290);
    text('TOTALLY AWESOME WARFARE', 450, 40);
    textSize(20)
    text('by Nicklas J. & Asger F.', 607, 66);
    }

     // Credits!
     if (menu == 1) {
        background(0, 255, 0)
        fill(0)
        textSize(20)
        text('Right Click to return to MENU', 525, 30)
        if (mouseButton == RIGHT) {
          menu = 0;
          
        }
      }


    if (menu == 2) {
        background(img1);
        baseI.show();
      
        for (let f of fjender) { // gør det nemmere at kalde Fjende classen
            f.move();
            f.show();
            if (Venner.hits(f)) { //Tjekker om ironman rammer en fjende
                console.log("hit!")
                
            }
           }
        }
    display();
    

}

function display() {

}

function mouseClicked() {
    if (menu == 0) {
      if (mouseX < 800 && mouseX > 612) {
        if (mouseY < 210 && mouseY > 150) {
            console.log('menu 2')
            menu = 2
          
        }
      //  if (mouseY < 275 && mouseY > 200) {
      //    menu = 1
      //  }
      //  if (mouseY < 425 && mouseY > 350) {
       //   menu = 1
      //  }
     }
    }
  }