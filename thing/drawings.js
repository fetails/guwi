/* js fillers */
let draw_filled_rect = function( ctx, x, y, w, h, color )
{
    ctx.fillStyle = color;
    ctx.fillRect( x, y, w, h );
};

let draw_line = function( ctx, x, y, xx, yy, color )
{
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo( x, y );
    ctx.lineTo( xx, yy );
    ctx.stroke();
};

let draw_outlined_rect = function( ctx, x, y, w, h, color )
{
    ctx.fillStyle = color;
    ctx.strokeRect( x, y, w, h );
};