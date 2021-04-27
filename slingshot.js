
class slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.slingshot = Constraint.create(options);

        World.add(world, this.slingshot);
    }

    fly(){
        this.slingshot.bodyA = null;
    }

    display(){
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
            stroke(48, 22, 8);
            push();
            if(pointA.x < 220) {
                strokeWeight(10);
              line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
              line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            } else {
                strokeWeight(5);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
            }
            pop();
        }
    }
    
}