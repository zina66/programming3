var xqanak = 40;
var yqanak = 40;
var side = 20;
var socket;
var exanak = 1;

function setup() {
    socket = io.connect('http://localhost:3000');
    createCanvas(xqanak * side, yqanak * side);
    background('#acacac');
    socket.on('matrix', gcel);
}
io.socket.on('matrix', function(data){
    var col = data[1];
    gcel(data[0],col);
});

function gcel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill(col);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("purple");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                if (x + y > 50) {
                    fill("blue");
                    rect(x * side, y * side, side, side);
                }
            }
        }
    }

}



