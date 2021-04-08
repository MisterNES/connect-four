import { Column } from './column.js';
export class Game {
    constructor(playerOneName, playerTwoName) {
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
        this.currentPlayer = 1;
        this.columns = [new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column()];
        this.winnerNumber = 0;
    }

    getName() {
        if (this.winnerNumber === 3) {
            return `${this.playerOneName} ties with ${this.playerTwoName}`;
        }
        return `${this.playerOneName} vs. ${this.playerTwoName}`;
    }

    playInColumn(colIdx) {
        this.columns[colIdx].add(this.currentPlayer);
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else if (this.currentPlayer === 2) {
            this.currentPlayer = 1;
        }

        this.checkForTie();


    }

    checkForTie() {
        let fullCount = 0;
        // console.log(fullCount)
        for (let i = 0; i <= 6; i++) {
            if (this.isColumnFull(i)) {
                fullCount++;
                // console.log(fullCount);
            }
        }

        if (fullCount === 7) {
            this.winnerNumber = 3;
        }
        // console.log(this.winnerNumber);

    }


    getTokenAt(rowIdx, colIdx) {
        return this.columns[colIdx].getTokenAt(rowIdx);
    }

    isColumnFull(colIdx) {
        return this.columns[colIdx].isFull();
    }
}
