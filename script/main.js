const custom_red = "#CB1111";
const custom_green = "#4EFF22";

const singleMode = document.getElementById("singleMode");
const multiMode = document.getElementById("multiMode");
const back_1 = document.getElementById("back_1");
const back_2 = document.getElementById("back_2");

const main = document.getElementById("main");
const main_1 = document.getElementById("main_1");
const main_2 = document.getElementById("main_2");

const headerBoard = document.getElementById("headBoard");
const scoreBoard = document.getElementById("scoreBoard");
const turnBoard = document.getElementById("turnBoard");
const button = document.getElementById("button");

const radio_rock = document.getElementById("radio_rock");
const radio_paper = document.getElementById("radio_paper");
const radio_scissors = document.getElementById("radio_scissors");

const headerBoardMulti = document.getElementById("headBoardMulti");
const scoreBoardMulti = document.getElementById("scoreBoardMulti");
const turnBoardMulti = document.getElementById("turnBoardMulti");

const player1Select = document.getElementById("player1Select");
const player2Select = document.getElementById("player2Select");

let AIScore = 0;
let PlayerScore = 0;
let player1Score = 0;
let player2Score = 0;

let player1 = null;
let player2 = null;

let multiplayerMode = false;

function displayMenu() {
    main.style.display = "flex";
    main_1.style.display = "none";
    main_2.style.display = "none";
}

function displaySingleMode() {
    main.style.display = "none";
    main_1.style.display = "flex";
    main_2.style.display = "none";
}

function displayMultiMode() {
    main.style.display = "none";
    main_1.style.display = "none";
    main_2.style.display = "flex";
    multiplayerMode = true;
}

function singleplayer(playerTurn) {
    const AITurn = ['Rock', 'Paper', 'Scissors'];
    let AITurnIndex = Math.floor(Math.random() * 3);

    if (playerTurn == AITurn[AITurnIndex]) {
        headerBoard.innerHTML = "DRAW";
        headerBoard.style.color = "white";
    }
    else if (playerTurn == "Rock" && AITurn[AITurnIndex] == "Paper") {
        headerBoard.innerHTML = "You Lost!";
        headerBoard.style.color = custom_red;
        AIScore++;
    }
    else if (playerTurn == "Rock" && AITurn[AITurnIndex] == "Scissors") {
        headerBoard.innerHTML = "You Win!";
        headerBoard.style.color = custom_green;
        PlayerScore++;
    }
    else if (playerTurn == "Paper" && AITurn[AITurnIndex] == "Rock") {
        headerBoard.innerHTML = "You Win!";
        headerBoard.style.color = custom_green;
        PlayerScore++;
    }
    else if (playerTurn == "Paper" && AITurn[AITurnIndex] == "Scissors") {
        headerBoard.innerHTML = "You Lost!";
        headerBoard.style.color = custom_red;
        AIScore++;
    }
    else if (playerTurn == "Scissors" && AITurn[AITurnIndex] == "Paper") {
        headerBoard.innerHTML = "You Win!";
        headerBoard.style.color = custom_green;
        PlayerScore++;
    }
    else if (playerTurn == "Scissors" && AITurn[AITurnIndex] == "Rock") {
        headerBoard.innerHTML = "You Lost!";
        headerBoard.style.color = custom_red;
        AIScore++;
    }

    button.innerHTML = "PLAY AGAIN"
    turnBoard.innerHTML = `Computer Chose “${AITurn[AITurnIndex]}”`;
    scoreBoard.innerHTML = `You ${PlayerScore} : ${AIScore} Ai`;
}

function multiplayer(player1Turn, player2Turn) {
    if (player1Turn == player2Turn) {
        headerBoardMulti.innerHTML = "DRAW";
        headerBoardMulti.style.color = "white";
    }
    else if (player1Turn == "Rock" && player2Turn == "Paper") {
        headerBoardMulti.innerHTML = "Player 2 Wins!";
        headerBoardMulti.style.color = custom_red;
        player2Score++;
    }
    else if (player1Turn == "Rock" && player2Turn == "Scissors") {
        headerBoardMulti.innerHTML = "Player 1 Wins!";
        headerBoardMulti.style.color = custom_green;
        player1Score++;
    }
    else if (player1Turn == "Paper" && player2Turn == "Rock") {
        headerBoardMulti.innerHTML = "Player 1 Wins!";
        headerBoardMulti.style.color = custom_green;
        player1Score++;
    }
    else if (player1Turn == "Paper" && player2Turn == "Scissors") {
        headerBoardMulti.innerHTML = "Player 2 Wins!";
        headerBoardMulti.style.color = custom_red;
        player2Score++;
    }
    else if (player1Turn == "Scissors" && player2Turn == "Paper") {
        headerBoardMulti.innerHTML = "Player 1 Wins!";
        headerBoardMulti.style.color = custom_green;
        player1Score++;
    }
    else if (player1Turn == "Scissors" && player2Turn == "Rock") {
        headerBoardMulti.innerHTML = "Player 2 Wins!";
        headerBoardMulti.style.color = custom_red;
        player2Score++;
    }

    turnBoardMulti.innerHTML = "PRESS \"SPACE\" KEY TO PLAY AGAIN";
    scoreBoardMulti.innerHTML = `Player 1 --- ${player1Score} : ${player2Score} --- Player 2`;
    player1Select.innerHTML = `Player 1 Chosed “${player1Turn}”`;
    player2Select.innerHTML = `Player 2 Chosed “${player2Turn}”`;
    player1 = null;
    player2 = null;
}

function keyPressedChecker(event) {
    let key = event.key;
    
    if (key == 'A' || key == "a") {
        player1 = "Paper";
    }
    else if (key == 'S' || key == "s") {
        player1 = "Scissors";
    }
    else if (key == 'D' || key == "d") {
        player1 = "Rock";
    }
    
    if (key == "ArrowLeft") {
        player2 = "Paper";
    }
    else if (key == "ArrowUp") {
        player2 = "Scissors";
    }
    else if (key == "ArrowRight") {
        player2 = "Rock";
    }

    if (player1 && player2 != null) {
        multiplayer(player1, player2);
    }
}

function reset() {
    AIScore = 0;
    PlayerScore = 0;
    player1Score = 0;
    player2Score = 0;

    player1 = null;
    player2 = null;

    multiplayerMode = false;

    headerBoard.innerHTML = "Rock Paper Scissors";
    headerBoard.style.color = "white";
    scoreBoard.innerHTML = "You 0 : 0 Ai";
    turnBoard.innerHTML = "Your Turn !";
    button.innerHTML = "START";

    radio_paper.checked = false;
    radio_scissors.checked = false;
    radio_rock.checked = false;

    headerBoardMulti.innerHTML = "Rock Paper Scissors";
    headerBoardMulti.style.color = "white";
    scoreBoardMulti.innerHTML = "Player 1 --- 0 : 0 --- Player 2";
    turnBoardMulti.innerHTML = "START";
    player1Select.innerHTML = '';
    player2Select.innerHTML = '';

    displayMenu();
}



displayMenu();

singleMode.onclick = function() {
    displaySingleMode();
}

multiMode.onclick = function() {
    displayMultiMode();
}

back_1.onclick = function() {
    reset();
}

back_2.onclick = function() {
    reset();
}

button.onclick = function() {
    if (radio_paper.checked) {
        singleplayer("Paper");
    }
    else if (radio_rock.checked) {
        singleplayer("Rock");
    }
    else if (radio_scissors.checked) {
        singleplayer("Scissors");
    }
}

document.onkeydown = function(event) {
    if (multiplayerMode) {
        if (turnBoardMulti.innerHTML == "START") {
            keyPressedChecker(event);
        }
        else if (event.key == " ") {
            headerBoardMulti.innerHTML = "Rock Paper Scissors";
            headerBoardMulti.style.color = "white";
            turnBoardMulti.innerHTML = "START";
            player1Select.innerHTML = '';
            player2Select.innerHTML = '';
        }
    }
}