class Thunder {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
      }
      this.body = Bodies.rectangle(x, y, options);
      
      World.add(world, this.body);
    }
    display(){
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("purple");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }