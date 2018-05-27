var yndhanur = require("./class-yndhanur.js");

module.exports = class GrassEater extends yndhanur {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 3;
        this.directions = [];
        this.eatten = 0;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    move() {
        this.getNewCoordinates();
        var emptyCells = this.chooseCell(0);
        var index = Math.floor(Math.random() * emptyCells.length);
        var newCell = emptyCells[index];
        if (newCell) {
            this.energy--;
            this.eatten = 0;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 2;
            this.y = newY;
            this.x = newX;

        }
        if (this.energy <= 0) {
            this.die();
        }
    }

    eat() {
        this.getNewCoordinates();
        this.multiply++;
        var emptyCells = this.chooseCell(1);
        var index = Math.floor(Math.random() * emptyCells.length);
        var newCell = emptyCells[index];
        if (newCell) {
            if (this.multiply >= 4) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[this.y][this.x] = 0;
                matrix[newY][newX] = 2;
                this.y = newY;
                this.x = newX;
                this.energy++;
                this.eatten++;
                for (var i in grassArr) {
                    if (newX == grassArr[i].x && newY == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            }
        }


        if (this.eatten >= 5 && weather == "spring") {
            this.mul();
            this.eatten = 0;
        }
        else if (this.eatten >= 3 && weather == "summer") {
            this.mul();
            this.eatten = 0;
        }
        else if (this.eatten >= 1 && weather == "autmn") {
            this.mul();
            this.eatten = 0;
        }

        else {
            this.move();
        }
    }

    mul() {
        this.getNewCoordinates();
        var emptyCells = this.chooseCell(1);
        var index = Math.floor(Math.random() * emptyCells.length);
        var newCell = emptyCells[index];
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 2;
            this.y = newY;
            this.x = newX;
            var newGrassEater = new GrassEater(newX, newY, this.index);
            GrassEaterArr.push(newGrassEater);
            this.energy = 3;
        }
        grasseaterbazm++;
    }
    die() {
        for (var i in GrassEaterArr) {
            if (this.x == GrassEaterArr[i].x && this.y == GrassEaterArr[i].y) {
                matrix[this.y][this.x] = 0;
                GrassEaterArr.splice(i, 1);
                break;
            }
        }
        grasseatermernel++;
    }
}
