class Drop {
    constructor(x,y){
        var options = {
            'restitution':0.8
        }
        this.body = Bodies.circle(x,y,5,options);
        this.color = color(45,65,87);
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y);
        rotate(angle)
        noStroke();
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0, 0, 3, 3);
        pop()
      }
    };
  
