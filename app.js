var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public/index.html");
});

app.listen(3000, function () {
    console.log("Example is running on port 3000");
});
var Grass = require("./class/class-Grass");
var Grasseater = require("./class/class-Grasseater");
var GrassEaterEater = require("./class/class-GrassEaterEater");
var xqanak = 40;
var yqanak = 40;
var matrix = [];
var rivArr = [];
var grassArr = [];
var GrassEaterArr = [];
var GrassEaterEaterArr = [];
var lightningArr = [];
var a = [];


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
function setInterval() {
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
    io.socket.emit(gcel)
}