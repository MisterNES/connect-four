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
        this.columns[colIdx].add();
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else if (this.currentPlayer === 2) {
            this.currentPlayer = 1;
        }
    }

    getTokenAt(rowIdx, colIdx){
        this.columns[colIdx].getTokenAt(rowIdx);
    }
}
