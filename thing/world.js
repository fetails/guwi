class c_world
{
    constructor( object, canvas )
    {
        this.object = object;
        this.canvas = canvas;

        this.dir = { x: 1, y: 1, speed: 7 };
    }

    on_loop()
    {
        if( this.object.pos.x > this.canvas.width - this.object.size.x )
        {
            this.object.pos.x = this.canvas.width - this.object.size.x;
            this.dir.x = -this.dir.speed;
        }

        if( this.object.pos.x < 0 )
        {
            this.object.pos.x = 0;
            this.dir.x = this.dir.speed;
        }

        if( this.object.pos.y > this.canvas.height - this.object.size.y )
        {
            this.object.pos.y = this.canvas.height - this.object.size.y;
            this.dir.y = -this.dir.speed;
        }
        if( this.object.pos.y < 0 )
        {
            this.object.pos.y = 0;
            this.dir.y = this.dir.speed;
        }
    }
}