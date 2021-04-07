export class Game {
    constructor(playerOneName, playerTwoName) {
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
        this.currentPlayer = 1;
    }

    getName() {
        return `${this.playerOneName} vs. ${this.playerTwoName}`;
    }

    playInColumn() {
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else if (this.currentPlayer === 2) {
            this.currentPlayer = 1;
        }
    }


}
