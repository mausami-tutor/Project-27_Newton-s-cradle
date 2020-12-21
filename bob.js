class Bob{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution: 1,
            friction: 0.5,
            density:1.2
        }
        this.body=Matter.Bodies.circle(x,y,30,options)
        World.add(world,this.body)
        
    }
    display(){
        var pos=this.body.position
        ellipseMode(CENTER)
        fill(255,0,255)
        ellipse(pos.x,pos.y,60,60)
    }
}