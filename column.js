export class Column {
    constructor(){
        this.spots = [];
    }

    add(playerNum){
        this.spots.unshift(playerNum);
    }

    getTokenAt(spot) {
        if (this.spots[spot] === 1){
            return 1;
        } else if (this.spots[spot] === 2){
            return 2;
        } else {
            return null;
        }
    }
}
