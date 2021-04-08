export class ColumnWinInspector {
  constructor(column) {
    this.column = column;
  }

  inspect() {
    // let streakCount = null;
    // console.log(streakCount);
    // for (let i = 0; i < this.column.length; i++){
    //     let current = this.column[i];
    //     if (current === 1 ){
    //         streakCount = 1;
    //     }
    //     else if (current === 2) {
    //         streakCount = 1;
    //     }

    //     if (streakCount === null){
    //         streakCount === current;
    //     }

    //     if (streakCount === 4){
    //         return this.column[i];
    //     }
    // }

    let streak = 1;
    // console.log("column:", this.column.spots);
    for (let i = 0; i <= 5; i++) {
      //   console.log("for loop running");
      if (
        this.column.spots[i - 1] === this.column.spots[i] &&
        i !== 0 &&
        this.column.spots[i]
      ) {
        // console.log("next:", this.column.spots[i], this.column.spots[i + 1]);
        ++streak;
        console.log("increased streak:", streak);
      } else {
        streak = 1;
      }
      if (streak === 4) {
        console.log("winner:", this.column.spots[i]);
        return this.column.spots[i];
      }
    }

    // let streak = 0;
    // console.log("empty streak:", streak);
    // console.log("column length", this.column.length);
    // for (let i = 5; i >= 0; i--) {
    //   //   console.log("for loop running");
    //   if (this.column[i - 1] !== this.column[i]) {
    //     // console.log("if statement running");
    //     streak = 0;
    //   } else {
    //     streak++;
    //     console.log("increased streak:", streak);
    //     if (streak === 4) {
    //       console.log("We have a winner!");
    //       return this.column[i];
    //     }
    //   }
    // }
  }
}
