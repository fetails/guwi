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