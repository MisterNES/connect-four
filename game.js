import { Column } from "./column.js";
import { ColumnWinInspector } from "./column-win-inspector.js";
import { RowWinInspector } from "./row-win-inspector.js";
export class Game {
    constructor(playerOneName, playerTwoName) {
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
        this.currentPlayer = 1;
        this.columns = [
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
            new Column(),
        ];
        this.winnerNumber = 0;
    }

    getName() {
        if (this.winnerNumber === 1) {
            return `${this.playerOneName} wins!`;
        }

        if (this.winnerNumber === 2) {
            return `${this.playerTwoName} wins!`;
        }

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
        this.checkForColumnWin();
        this.checkForRowWin();
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
        if (this.winnerNumber === 1 || this.winnerNumber === 2) {
            return true;
        }
        return this.columns[colIdx].isFull();
    }

    checkForColumnWin() {
        if (this.winnerNumber !== 0) {
            return;
        }

        // for (let i = 0; i < this.columns.length; i++){
        for (let column of this.columns) {
            let col = new ColumnWinInspector(column);
            // console.log("column:", this.columns[i]);
            let winningNumber = col.inspect();
            if (winningNumber > 0) {
                this.winnerNumber = winningNumber;
                return;
            }
        }
    }

    checkForRowWin() {
        if (this.winnerNumber !== 0) {
            return;
        }

        let group1 = this.columns.slice(0, 4);
        let group2 = this.columns.slice(1, 5);
        let group3 = this.columns.slice(2, 6);
        let group4 = this.columns.slice(3);

        let groupArr = [group1, group2, group3, group4];

        for (let i = 0; i < groupArr.length; i++) {
            let rowGroup = new RowWinInspector(groupArr[i]);
            if (rowGroup.inspect() > 0) {
                this.winnerNumber = rowGroup.inspect();
            };
        }
    }

}
