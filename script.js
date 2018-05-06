var xqanak = 40;
var yqanak = 40;
var matrix = [];
var side = 20;
var rivArr = [];
var grassArr = [];
var GrassEaterArr = [];
var GrassEaterEaterArr = [];
var lightningArr = [];
var a = [];
function setup() {
    for (var y = 0; y < yqanak; y++) {
        matrix[y] = [x];
        for (var x = 0; x < xqanak; x++) {
            if (x + y < 54) {
                matrix[y][x] = Math.round(random(0, 5));
            }
            else {
                matrix[y][x] = 5;

            }
        }
    }


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var great = new GrassEater(x, y, 2);
                GrassEaterArr.push(great);
            }
            else if (matrix[y][x] == 3) {
                var greateat = new GrassEaterEater(x, y, 3);
                GrassEaterEaterArr.push(greateat);
            }
            else if (matrix[y][x] == 4) {
                var light = new lightning(x, y, 4);
                lightningArr.push(light);
            }
            else if (matrix[y][x] == 5) {
                var riv = new river(x, y, 5);
                rivArr.push(riv);
            }
        }
    }

    frameRate(1);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
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



    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in GrassEaterArr) {
        GrassEaterArr[i].eat();
        GrassEaterEaterArr[i].eat();
    }
    for (var i in rivArr) {
        rivArr[i].eat();
    }
    for (var i in lightningArr) {
        lightningArr[i].eat();
    }
}
