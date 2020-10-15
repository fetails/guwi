class c_entities
{
    constructor( index )
    {
        this.velocity = 0.000;
        this.pos = { x: 0, y: 0 };
        this.size = { x: 10, y: 10 };
        this.index = index;
    }

    move_to( _x, _y )
    {
        this.pos.x = _x;
        this.pos.y = _y;
    }

    set_spawn( _width, _height )
    {
        this.pos.x = Math.floor( Math.random() * _width );
        this.pos.y = Math.floor( Math.random() * _height );
    }

    render_entity( ctx )
    {
        draw_filled_rect( ctx, this.pos.x, this.pos.y, this.size.x, this.size.y, "#FE2E64" );
    }
}