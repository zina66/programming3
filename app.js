var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var cords = [];

app.use(express.static("public"));
app.get('/', function (req, res) {
    res.redirect('public/index.html');
});
server.listen(3000);

var Grass = require("./class/class-grass");
var Grasseater = require("./class/class-grasseater");
var GrassEaterEater = require("./class/class-grasseatereater");
var lightning = require("./class/class-lightning");
var river = require("./class/class-river");
var yndhanur = require("./class/class-yndhanur");

var xqanak = 40;
var yqanak = 40;
matrix = [];
rivArr = [];
grassArr = [];
GrassEaterArr = [];
GrassEaterEaterArr = [];
lightningArr = [];
for (var y = 0; y < yqanak; y++) {
    matrix[y] = [x];
    for (var x = 0; x < xqanak; x++) {
        if (x + y < 54) {
            matrix[y][x] = Math.floor(Math.random() * 5);
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
            var great = new Grasseater(x, y, 2);
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
exanak = 0;
io.on('connection', function () {

    function func() {
        exanak++;
        if (exanak == 10) {
            k = "#55F457";
        }
        console.log(exanak);
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
        io.socket.emit('matrix', [matrix, k]);
    }
    setInterval(func, 500);

});


