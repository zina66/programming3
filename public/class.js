class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.index;

            var newGrass = new Grass(newX, newY, this.index);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }

}
class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 3;
        this.index = index;
        this.directions = [];
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;

    }
    move() {
        this.getNewCoordinates();
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            this.energy--;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 2;
            this.y = newY;
            this.x = newX;


            if (this.energy <= 0) {
                this.die();
            }
        }
    }
    eat() {
        this.getNewCoordinates();
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 2;
            this.y = newY;
            this.x = newX;
            this.energy++;

            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 15) {
                this.mul();
            }
        }

        else {
            this.move();
        }
    }
    mul() {
        this.getNewCoordinates();
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);
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
    }
    die() {
        for (var i in GrassEaterArr) {
            if (this.x == GrassEaterArr[i].x && this.y == GrassEaterArr[i].y) {
                matrix[this.y][this.x] = 0;
                GrassEaterArr.splice(i, 1);
                break;
            }
        }
    }
}
class GrassEaterEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 6;
        this.index = index;
        this.directions = [];
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;

    }
    move() {
        this.getNewCoordinates();
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            this.energy--;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 3;
            this.y = newY;
            this.x = newX;


            if (this.energy <= 0) {
                this.die();
            }
        }
    }
    eat() {
        this.getNewCoordinates();
        var emptyCells = this.chooseCell(2);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 3;
            this.y = newY;
            this.x = newX;
            this.energy++;

            for (var i in GrassEaterArr) {
                if (newX == GrassEaterArr[i].x && newY == GrassEaterArr[i].y) {
                    GrassEaterArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 7) {
                this.mul();
            }
        }

        else {
            this.move();
        }
    }
    mul() {
        this.getNewCoordinates();
        var emptyCells = this.chooseCell(2);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 3;
            this.y = newY;
            this.x = newX;
            var newGrassEaterEater = new GrassEaterEater(newX, newY, this.index);
            GrassEaterEaterArr.push(newGrassEaterEater);
            this.energy = 6;
        }
    }
    die() {
        for (var i in GrassEaterEaterArr) {
            if (this.x == GrassEaterEaterArr[i].x && this.y == GrassEaterEaterArr[i].y) {
                matrix[this.y][this.x] = 0;
                GrassEaterArr.splice(i, 1);
                break;
            }
        }
    }
}
class river {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy
        this.index = index;
        this.multiply = 0;
        this.directions = [];
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }

    eat() {
        this.multiply++;
        if (this.multiply >= 3) {
            if (this.x + this.y == 54) {
                matrix[this.y - 1][this.x] = 5;
                matrix[this.y][this.x - 1] = 5;
                var newriver = new river(this.x, this.y - 1, this.index);
                rivArr.push(newriver);
                var newriver = new river(this.x - 1, this.y, this.index);
                rivArr.push(newriver);
                for (var i in GrassEaterArr) {
                    if (matrix[this.y][this.x - 1] == GrassEaterArr[i].x && matrix[this.y - 1][this.x] == GrassEaterArr[i].y) {
                        GrassEaterArr.splice(i, 1);
                        break;
                    }
                }

                for (var i in GrassEaterEaterArr) {
                    if (matrix[this.y][this.x - 1] == GrassEaterEaterArr[i].x && matrix[this.y - 1][this.x] == GrassEaterEaterArr[i].y) {
                        GrassEaterEaterArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if (this.x + this.y == 53) {
                matrix[this.y - 1][this.x] = 5;
                matrix[this.y][this.x - 1] = 5;
                var newriver = new river(this.x, this.y - 1, this.index);
                rivArr.push(newriver);
                var newriver = new river(this.x - 1, this.y, this.index);
                rivArr.push(newriver);
                for (var i in GrassEaterArr) {
                    if (matrix[this.y][this.x - 1] == GrassEaterArr[i].x && matrix[this.y - 1][this.x] == GrassEaterArr[i].y) {
                        GrassEaterArr.splice(i, 1);
                        break;
                    }
                }

                for (var i in GrassEaterEaterArr) {
                    if (matrix[this.y][this.x - 1] == GrassEaterEaterArr[i].x && matrix[this.y - 1][this.x] == GrassEaterEaterArr[i].y) {
                        GrassEaterEaterArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if (this.x + this.y == 52) {
                matrix[this.y - 1][this.x] = 5;
                matrix[this.y][this.x - 1] = 5;
                var newriver = new river(this.x, this.y - 1, this.index);
                rivArr.push(newriver);
                var newriver = new river(this.x - 1, this.y, this.index);
                rivArr.push(newriver);
                for (var i in GrassEaterArr) {
                    if (matrix[this.y][this.x - 1] == GrassEaterArr[i].x && matrix[this.y - 1][this.x] == GrassEaterArr[i].y) {
                        GrassEaterArr.splice(i, 1);
                        break;
                    }
                }

                for (var i in GrassEaterEaterArr) {
                    if (matrix[this.y][this.x - 1] == GrassEaterEaterArr[i].x && matrix[this.y - 1][this.x] == GrassEaterEaterArr[i].y) {
                        GrassEaterEaterArr.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }

}
class lightning {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 2;
        this.directions = [];
        this.multiply = 0;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;

    }
    move() {
        this.getNewCoordinates();
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            this.die();
        }
    }
    eat() {
        this.getNewCoordinates();
        this.multiply++;
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);
        if (newCell) {
            if (this.multiply >= 4) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[this.y][this.x] = 0;
                matrix[newY][newX] = 4;
                this.y = newY;
                this.x = newX;
                for (var i in grassArr) {
                    if (newX == grassArr[i].x && newY == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            }
        }
        else {
            this.move();
        }
    }
    die() {
        for (var i in lightningArr) {
            if (this.x == lightningArr[i].x && this.y == lightningArr[i].y) {
                matrix[this.y][this.x] = 0;
                lightningArr.splice(i, 1);
                break;
            }
        }

    }
}


