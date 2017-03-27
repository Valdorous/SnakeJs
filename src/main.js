/**
 * Created by Anees S on 3/25/2017.
 */
var snake;
var food;
var canvas;
var cols = 600;
var rows = 600;

var toggle = true;
var is1337 = false;

var isLit = false;

var isRainbow = true;

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
    if(is1337 && toggle){
        canvas.style.background = 'white';
        isLit = true;
        toggle = false;
    }else{
        canvas.style.background   = "#111";
        isLit = false;
        toggle = true;
    }
    document.body.appendChild(canvas);
}
window.onload = function () {
    main();
    console.log('Can you handle the Snek???');
    console.log('=============================')
    console.log('Make it lit with: ')
    console.log('is1337 = 1')
}

document.onkeydown = checkKey;

var key = 39;

function checkKey(e) {
    e = e || window.event;
    if(e.keyCode != key){
        // Cancel call from snakeUpdate to add speed & reliability //
        clearTimeout(call);
        switch(e.keyCode){
            case(38):
                snake.do('up');
                break;
            case(40):
                snake.do('down');
                break;
            case(37):
                snake.do('left');
                break;
            case(39):
                snake.do('right');
                break;
        }
        key = e.keyCode;
        snake.update();
    }
}