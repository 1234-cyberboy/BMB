class Um {
    constructor(x,y, width, height) {
      var options = {
          isStatic: true
      }
      this.r = 10;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      
      World.add(world, this.body);

        umb = loadImage("images/Walking Frame/walking_1.png");
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      push();
      image(umb,0, 400, 400, 400);
    
      
      pop();
    }
  };
