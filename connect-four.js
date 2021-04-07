import { Game } from './game.js';

let game = undefined;
function updateUI() {
    const boardHolder = document.getElementById("board-holder");
    if (game === undefined){        const boardHolder = document.getElementById("board-holder");
        boardHolder.classList.add("is-invisible"); //adds boardHolder to the is-invisible class
    }
    else if (game !== undefined){
        boardHolder.classList.remove("is-invisible") //removes boardHolder from the is-invisible class
        let gameName = document.getElementById("game-name");
        gameName.innerHTML= game.getName(); //
    }
}

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



});
