export class ColumnWinInspector {

    constructor(column){
        this.column = column;
    }

    inspect() {
        streakCount = null;
        for (let i = 0; i < this.column.length; i++){
            let current = this.column[i];
            if (current === 1 ){
                streakCount = 1;
            }
            else if (current === 2) {
                streakCount = 1;
            }
            
            if (streakCount === 4){
                return this.column[i];
            }
        }


    }

}
