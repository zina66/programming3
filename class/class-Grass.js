var yndhanur = require("./class-yndhanur.js");

module.exports = class Grass extends yndhanur {
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var index = Math.floar(Math.random() * emptyCells.length);
        var newCell = emptyCells[index];

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



