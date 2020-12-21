class Rope{
    constructor(bodyA, bodyB,offsetx, offsety){
        this.offsetX=offsetx
        this.offsetY=offsety
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            
            pointB: {x: this.offsetX, y:this.offsetY} ,
            stiffness: 0.1,
            length: 300
        }
        this.rope=Constraint.create(options)
        World.add(world, this.rope)
    }
    display(){
        var posA=this.rope.bodyA.position
        var posB=this.rope.bodyB.position
        strokeWeight(4)
        line(posA.x, posA.y, posB.x+this.offsetX, posB.y+this.offsetY)
    }
}
