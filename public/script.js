var xqanak = 40;
var yqanak = 40;
var side = 20;
var socket;
var exanak = 1;
var col = "#acacac";

function setup() {
    socket = io.connect('http://localhost:3000');
    socket.on('matrix', gcel);

    createCanvas(xqanak * side, yqanak * side);
    background(col);
    socket.on('weather', function (weather) {

        if (weather = "spring") {
            col = "#55F457";


        }
        else if (weather = "summer") {
            col = "#F5F85F";

        }
        else if (weather = "autmn") {
            col = "#D9B250";

        }
        else if (weather = "winter") {
            col = "#C5E4ED";

        }
    });

}


function gcel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("k");
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



