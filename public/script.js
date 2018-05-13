
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
}
