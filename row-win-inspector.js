export class RowWinInspector {
  constructor(columns) {
    this.columns = columns;
  }

  inspect() {
    let streak = 1;
    console.log(this.columns)
    for (let i = 0; i < this.columns.length; i++) {
      console.log('begin forloop')
      if (this.columns[i] === this.columns[i - 1] && i !== 0 && this.columns[i]) {
        console.log('first if statement')
        streak++;
      }
      if (streak === 4) {
        console.log('winner!')
        return this.columns[i];
      }
    }

  }
}
