class c_player
{
    constructor()
    {
        this.velocity = 0.000;
        this.pos = { x: 0, y: 0 };
        this.size = { x: 40, y: 40 };

        this.previous_position = [ ];
        this.last_update = 0;
    }

    move_to( _x, _y )
    {
        this.pos.x = _x;
        this.pos.y = _y;
    }

    render_player( ctx, track = true )
    {
        if( track )
        {
            for( var i = 0; i < this.previous_position.length; i++ )
                draw_filled_rect( ctx, this.previous_position[ i ].x, this.previous_position[ i ].y, 40, 40, "#2d2d2d" );
    
            if( Date.now() > this.last_update + 7 )
            {
                this.last_update = Date.now();
                this.previous_position.push( { x: this.pos.x, y: this.pos.y } );
            };
    
            if( this.previous_position.length > 15 )
                this.previous_position.shift();
        }
        

        draw_filled_rect( ctx, this.pos.x, this.pos.y, 40, 40, "#2E9AFE" );
        
    }

    set_spawn( _width, _height )
    {
        this.pos.x = Math.floor( Math.random() * _width );
        this.pos.y = Math.floor( Math.random() * _height );
    }
}