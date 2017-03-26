/**
 * Created by Anees S on 3/25/2017.
 */
function Food(){
    this.x = 0;
    this.y = 0;

    this.randomize = function(){
        this.x = (Math.floor(Math.random() * ((cols - speed) - 0 + 1)));
        this.y = (Math.floor(Math.random() * ((rows - speed) - 0 + 1)));
        if(this.x % 15 == 0 && this.y % 15 == 0){
            this.draw();
        }else{
            this.randomize();
        }
    }

    this.draw = function () {
        var food = canvas.getContext('2d');
        food.beginPath();
        food.rect(this.x, this.y, 15, 15);
        food.fillStyle = isLit ? 'dodgerblue' : 'deeppink';
        food.fill();
    }
}