export class Column {
    constructor() {
        this.spots = [null, null, null, null, null, null];
    }

    add(playerNum) {
        for (let i = 5; i >= 0; i--) {
            if (this.spots[i] === null) {
                this.spots[i] = playerNum;
                return;
            }
        }
    }

    getTokenAt(rowIndex) {
        return this.spots[rowIndex];


        // if (this.spots[spot] === 1) {
        //     return 1;
        // } else if (this.spots[spot] === 2) {
        //     return 2;
        // } else {
        //     return null;
        // }
    }
}
