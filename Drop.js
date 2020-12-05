class Drop {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0,
    }
    var maxDrops = 100;
    this.body = Bodies.circle(x, y, options);
    World.add(world, this.body);
  }
  
  display(){
    push();
    for(var  i= 0 <maxDrops; i++) {
       drops.push(new createDrop(random(0,400),random(0,400)))
    }
    pop();
  }
}