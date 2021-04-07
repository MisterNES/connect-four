import { Game } from './game.js';

let game = undefined;
function updateUI() {
    const boardHolder = document.getElementById("board-holder");
    if (game === undefined) {
        const boardHolder = document.getElementById("board-holder");
        boardHolder.classList.add("is-invisible"); //adds boardHolder to the is-invisible class
    } else if (game !== undefined) {
        boardHolder.classList.remove("is-invisible") //removes boardHolder from the is-invisible class
        let gameName = document.getElementById("game-name");
        gameName.innerHTML = game.getName(); //
    }


    if (game.currentPlayer === 1) {
        clickTargets.classList.add("black");
        clickTargets.classList.remove("red");
    } else if (game.currentPlayer === 2) {
        clickTargets.classList.add("red");
        clickTargets.classList.remove("black");
    }

    for (let i = 0; i <= 5; i++){
        for (let j = 0; j <= 6; j++){
            let square = document.querySelector(`#square-${i}-${j}`);
            square.innerHTML = "";
            console.log(square);
            let result = game.getTokenAt(i, j);
            if (result === 1){
                let div = document.createElement('div');
                div.classList.add("token");
                div.classList.add("black");
                square.appendChild(div);
            } else if (result === 2){
                let div = document.createElement('div')
                div.classList.add("token");
                div.classList.add("red");
                square.appendChild(div);
            }
        }
    }
}

let clickTargets = document.getElementById("click-targets");

window.addEventListener("DOMContentLoaded", event => {

    let player1 = document.getElementById("player-1-name");
    let player2 = document.getElementById("player-2-name");
    let newGameButton = document.getElementById("new-game");

    player1.addEventListener("keyup", event => {
        // let newGameButton = document.getElementById("new-game");
        // if (player1.value && player.value){
        //     newGameButton.disabled = false;
        player2.addEventListener("keyup", event => {
            newGameButton.disabled = false;
        })
    })

    newGameButton.addEventListener("click", event => {
        game = new Game(player1.value, player2.value); //Game class is on game.js
        player1.value = "";
        player2.value = "";
        newGameButton.disabled = true;
        updateUI();
    })

    clickTargets.addEventListener("click", event => {
        console.log();
        // console.log(Number.parseInt(event.target.id));
        game.playInColumn(Number.parseInt(event.target.id[event.target.id.length-1]));
        updateUI();
    })



});
