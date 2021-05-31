class Snow {
    constructor(x,y,height,){
      this.body = Bodies. rectangle(x,y,20,height,);
      this.image = loadImage("snow1.webp");
      Matter.Body.setAngle(this.body, angle);
    }
  }