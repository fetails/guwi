class c_player
{
    constructor()
    {
        this.velocity = 0.000;
        this.pos = { x: 0, y: 0 };
        this.size = { x: 40, y: 40 };
    }

    move_to( _x, _y )
    {
        this.pos.x = _x;
        this.pos.y = _y;
    }

    render_player( ctx )
    {
        draw_filled_rect( ctx, this.pos.x, this.pos.y, 40, 40, "#2E9AFE" );
    }

    set_spawn( _width, _height )
    {
        this.pos.x = Math.floor( Math.random() * _width );
        this.pos.y = Math.floor( Math.random() * _height );
    }
}