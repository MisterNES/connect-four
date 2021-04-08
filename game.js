import { Column } from './column.js';
export class Game {
    constructor(playerOneName, playerTwoName) {
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
        this.currentPlayer = 1;
        this.columns = [new Column(), new Column(), new Column(), new Column(), new Column(), new Column(), new Column()];
    }

    getName() {
        return `${this.playerOneName} vs. ${this.playerTwoName}`;
    }

    playInColumn(colIdx) {
        this.columns[colIdx].add(this.currentPlayer);
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else if (this.currentPlayer === 2) {
            this.currentPlayer = 1;
        }
    }

    getTokenAt(rowIdx, colIdx) {
        return this.columns[colIdx].getTokenAt(rowIdx);
    }

    isColumnFull(colIdx) {
        return this.columns[colIdx].isFull();
    }
}
