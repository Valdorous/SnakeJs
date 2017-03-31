/**
 * Created by Anees S on 3/25/2017.
 */
var snake;
var food;
var canvas;
var cols = 600;
var rows = 600;

function main() {
    drawCanvas();

    food = new Food();
    food.randomize();

    snake = new Snake();
    snake.update();

}
function drawCanvas() {
    canvas = document.createElement('canvas');
    canvas.width  = cols;
    canvas.height = rows;
    canvas.style.background = '#000';
    document.body.appendChild(canvas);
}
window.onload = function () {
    main();
    console.log('Can you handle the Snek???');
    console.log('=============================')
}

document.onkeydown = checkKey;

var key = 39;
var opposite = 37;
function checkKey(e) {
    e = e || window.event;
    if(e.keyCode != key && e.keyCode != opposite){
        // Cancel call from snakeUpdate to add speed & reliability //
        clearTimeout(call);
        switch(e.keyCode){
            case(38):
                snake.do('up');
                opposite = 40;
                break;
            case(40):
                snake.do('down');
                opposite = 38;
                break;
            case(37):
                snake.do('left');
                opposite = 39;
                break;
            case(39):
                snake.do('right');
                opposite = 37;
                break;
        }
        key = e.keyCode;
        snake.update();
    }
}