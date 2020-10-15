class c_scene
{
    constructor( )
    {
        this.canvas = document.querySelector("canvas");
        this.context = this.canvas.getContext( "2d" );
        this.m = new c_megastruct( this.canvas, this.context );

        this.start_time_fn = 0;
        this.frequency_fn = 0;
    }

    on_clear_screen( )
    {
        this.context.clearRect( 0, 0, this.canvas.width, this.canvas.height );
        draw_filled_rect( this.context, 0, 0, this.canvas.width, this.canvas.height, "#000000" );
    }

    on_init( )
    {
        document.getElementById( "ent_size" ).innerHTML = "PlayerList Max Players: " + this.m.get_max_players( );
        this.start_time_fn = performance.now( );

        document.onkeydown = function( e ) { scene.m.controller.on_event_down( e.keyCode ); }
        document.onkeyup = function( e ) { scene.m.controller.on_event_up( e.keyCode ); }

        this.m.player.set_spawn( this.canvas.width, this.canvas.height );
    }

    on_loop( )
    {
        this.on_clear_screen( );
        this.m.controller.loop( this.m.player );
        this.m.on_run_player( );

        let end_time_fn = performance.now();
        this.frequency = end_time_fn - this.start_time_fn;
        this.start_time_fn = end_time_fn;

        document.getElementById("average_fps").innerHTML = "average fps: " + Math.round( 1000 / this.frequency );
        document.getElementById("local_pos").innerHTML = "(x: " + this.m.player.pos.x + " | y: " + this.m.player.pos.y + ")";
        document.getElementById("w2scr").innerHTML = "(x: " + this.m.player.pos.x + " | y: " + this.m.player.pos.y + ")";

        let scr2w = this.screen_to_world( this.m.player.pos );
        document.getElementById("scr2w").innerHTML = "(x: " + scr2w.x + " | y: " + scr2w.y + ")";

    }

    screen_to_world( position )
    {
        let destination = { x: position.x, y: position.y };

        let converted = { x: ( destination.x / this.canvas.width ).toFixed( 2 ), y: ( destination.y / this.canvas.height ).toFixed( 2 ) };

        return converted;
    }
}