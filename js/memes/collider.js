class c_collider
{
    constructor( obj )
    {
        this.object = obj;
        this.collide_left = false;
        this.collide_right = false;
        this.collide_up = false;
        this.collide_down = false;
    }

    did_collide( target_x, target_y, target_w, target_h )
    {
    }

    process_event( )
    {
        if( this.collide_left )
            this.object.pos.x -= 1;
            
        if( this.collide_right )
            this.object.pos.x += 1;

        if( this.collide_up )
            this.object.pos.y += 1;

        if( this.collide_down )
            this.object.pos.y -= 1;
    }
}