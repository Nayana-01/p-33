var bg, snow1img, snow1, snow2img, snow2;


function preload(){
 bg = loadImage("snow1.jpg")
 snow1img = loadImage("snow4.webp");
 snow2img = loadImage("snow5.webp");
}





function setup() {
  createCanvas(800,500);
  snow1 = new Snow(100, 250, 10, 10)
  snow2= new Snow(250, 350, 10, 10)
  snow3 = new Snow(50, 250, 10, 10)
  snow4 = new Snow(220, 150, 10, 10)
  snow5 = new Snow(150, 200, 10, 10)




  
 


  
}

function draw() {
  background(bg);
    snow1.display();
    snow2.display();
    snow3.display();
    snow4.display();
    snow5.display();
 

  drawSprites();
}