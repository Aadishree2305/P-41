class Umbrella {
    constructor(x, y, width ,height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
      }
      this.body = Bodies.circle(x, y, width, height, options);
      
      World.add(world, this.body);
    }
    display(){
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      fill("purple");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
    
  }