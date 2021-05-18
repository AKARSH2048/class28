class Rope{
    constructor(bodyA,pointB){
        var option ={
            bodyA : bodyA,
            pointB : pointB, 
            length : 100,
            stiffness : 0.04,
        }
      this.chain = Constraint.create(option)
      this.pointB = pointB;
    World.add(world, this.chain);
    }
    display(){
      if(this.chain.bodyA){
        var A = this.chain.bodyA.position
        var B = this.pointB 
        push();
        strokeWeight(5)
        stroke("red");
        line(A.x,A.y,B.x,B.y)
        pop();
      }
  }
  fly(){
    this.chain.bodyA = null
  }
}