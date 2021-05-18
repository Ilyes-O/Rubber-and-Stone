class Stone{
    constructor(x,y,width,height)
    {
        var options = {
            'restitution':.8,
            'friction':0.9,
            'density':12
        }

        this.x=x;
		this.y=y;
        this.width = width;
        this.height = height;
        this.options = options
		this.body=Bodies.rectangle(this.x, this.y, options)
		World.add(world, this.body);

    
    }
    display()
    {
        var pos = this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x, pos.y);
        rotate(angle);
		rectMode(CENTER)
		strokeWeight(4);
		stroke("black");
		fill("darkblue");
        ellipse(200,200,this.width, this.height)
}
}