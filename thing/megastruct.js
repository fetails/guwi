class c_megastruct
{
    constructor( canvas, context )
    {
        this.player = new c_player( );
        this.collider = new c_collider( this.player );
        this.controller = new c_controller( );
        this.entities = [ ];
        this.max_players = 32;

        this.canvas = canvas;
        this.context = context;

        this.setup_entities( );
    }

    get_max_players()
    {
        return this.max_players;
    }

    setup_entities( length = 32 )
    {
        for( let i = 0; i < length; i++ )
        {
            this.entities[ i ] = new c_entities( i );
            this.entities[ i ].set_spawn( this.canvas.width, this.canvas.height );
        }
    }

    on_run_player( )
    {
        this.player.render_player( this.context );
    }
}