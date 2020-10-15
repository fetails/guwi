class c_controller
{
    constructor()
    {
        this.move_left = false;
        this.move_up = false;
        this.move_right = false;
        this.move_down = false;

        this.shift = false;
        this.shift_speed = 15;
        this.walk_speed = 5;
    }

    on_event_down( e )
    {
        if( e == 87 ) this.move_up = true;
        if( e == 68 ) this.move_right = true;
        if( e == 83 ) this.move_down = true;
        if( e == 65 ) this.move_left = true;
        if( e == 16 ) this.shift = true;
    }

    on_event_up( e )
    {
        if( e == 87 ) this.move_up = false;
        if( e == 68 ) this.move_right = false;
        if( e == 83 ) this.move_down = false;
        if( e == 65 ) this.move_left = false;
        if( e == 16 ) this.shift = false;
    }

    loop( player )
    {
        if( this.move_up )
            player.pos.y -= this.shift ? this.shift_speed : this.walk_speed;

        if( this.move_down )
            player.pos.y += this.shift ? this.shift_speed : this.walk_speed;

        if( this.move_right )
            player.pos.x += this.shift ? this.shift_speed : this.walk_speed;

        if( this.move_left )
            player.pos.x -= this.shift ? this.shift_speed : this.walk_speed;
    }
}