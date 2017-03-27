/**
 * Created by Anees S on 3/25/2017.
 */
var speed = 15;
var timerSpeed = 80;

var used = {};
var call = false;

function Snake() {
    this.x = 0 - speed;
    this.y = 0;
    this.length = 3;
    this.segments = [];

    this.xSpeed = speed;
    this.ySpeed = 0;

    this.segments[1] = new Segment(-speed, this.y)
    this.segments[2] = new Segment(-speed*2, this.y)
    this.segments[3] = new Segment(-speed*3, this.y)

    this.update = function(){
        canvas.remove();
        drawCanvas();
        food.draw();

        used = {};
        var current;

        for(var i = 1; i < this.segments.length; i++){
            current = this.segments[i-1] = this.segments[i];
            if(used[current.x] == undefined){
                used[current.x] = {};
            }
            used[current.x][current.y] = 1;
            current.draw(false, i+this.length+1);
        }
        this.x += this.xSpeed;
        this.y += this.ySpeed


        if(used[this.x] != undefined && used[this.x][this.y] == 1){
            alert('DEAD!!! - Score: ' + (this.length * 1337));
            snake = new Snake();
            snake.update();
            return;
        }
        else if(this.x == food.x && this.y == food.y){
            food.randomize();
            this.length++;
        }

        // Prevent snake disappearing from screen //
        this.x = (this.x + 1 > cols) ? 0 : (this.x < 0 ? cols : this.x);
        this.y = (this.y + 1 > rows) ? 0 : (this.y < 0 ? rows : this.y);

        this.segments[this.length] = new Segment(this.x, this.y);
        this.segments[this.length].draw(true, 0);

        call = setTimeout(function () {
            snake.update();
        }, timerSpeed)
    }

    this.do = function(direction) {
        var x = this.x;
        var y = this.y;
        this.xSpeed = 0;
        this.ySpeed = 0;
        switch(direction){
            case('up'):
                this.ySpeed = -1 * speed;
                break;
            case('down'):
                this.ySpeed = speed;
                break;
            case('left'):
                this.xSpeed = -1 * speed;
                break;
            case('right'):
                this.xSpeed = speed;
                break;
        }
        this.x = x;
        this.y = y;
    }

}

function Segment(x, y) {
    this.x = x;
    this.y = y;
    this.draw = function(isHead, index){
        var segment = canvas.getContext('2d');
        segment.beginPath();
        segment.rect(this.x, this.y, 15, 15);
        segment.fillStyle = (isHead ? '#00FF00' : (index % 2 == 0 ? '#FF00CC' : '#fff'))
        segment.fill();
    }
}