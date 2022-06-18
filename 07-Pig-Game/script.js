"use strict";

let player0 = {
    name: "player0",
    myTurn: true,
    winner: false,
    score: 0,
    currentScore: 0,
    ResetAllScore: function () {
        this.score = 0;
        this.currentScore = 0;

        document.getElementById("score--0").textContent = 0;
        document.getElementById("current--0").textContent = 0;
    },
    ResetCurrentScore: function () {
        this.currentScore = 0;
        document.getElementById("current--0").textContent = 0;
    },
    AddScore: function () {
        this.score += this.currentScore;
        console.log(this.score);
        document.getElementById("score--0").textContent = this.score;
        document.getElementById("current--0").textContent = 0;
    },
    AddCurrentScore: function (diceValue) {
        this.currentScore += diceValue;
        document.getElementById("current--0").textContent = this.currentScore;
    },

    TransferControl: function (anotherPlayer) {
        this.currentScore = 0;
        this.myTurn = false;
        anotherPlayer.myTurn = true;
        document.querySelector(".player--0").classList.remove("player--active");
        document.querySelector(".player--1").classList.add("player--active");
    },
};
let player1 = {
    name: "player1",
    myTurn: false,
    score: 0,
    currentScore: 0,
    ResetAllScore: function () {
        this.score = 0;
        this.currentScore = 0;

        document.getElementById("score--1").textContent = 0;
        document.getElementById("current--1").textContent = 0;
    },
    ResetCurrentScore: function () {
        this.currentScore = 0;
        document.getElementById("current--1").textContent = 0;
    },
    AddScore: function () {
        this.score += this.currentScore;
        document.getElementById("score--1").textContent = this.score;
        document.getElementById("current--1").textContent = 0;
    },
    AddCurrentScore: function (diceValue) {
        this.currentScore += diceValue;
        document.getElementById("current--1").textContent = this.currentScore;
    },
    TransferControl: function (anotherPlayer) {
        this.currentScore = 0;
        this.myTurn = false;
        anotherPlayer.myTurn = true;
        document.querySelector(".player--1").classList.remove("player--active");
        document.querySelector(".player--0").classList.add("player--active");
    },
};

//
//
//
//

let diceValue = 5;
function rollDice() {
    if (player0.winner || player1.winner) return;
    console.log("rollDice");
    diceValue = Math.floor(Math.random() * 6) + 1;
    console.log(diceValue);
    document.querySelector(".dice").style = "display: block";
    document.querySelector(".dice").src = `dice-${diceValue}.png`;
    if (player0.myTurn === true) {
        if (diceValue === 1) {
            player0.ResetCurrentScore();
            player0.TransferControl(player1);
        } else {
            player0.AddCurrentScore(diceValue);
        }
    } else {
        if (diceValue === 1) {
            player1.ResetCurrentScore();
            player1.TransferControl(player0);
        } else {
            player1.AddCurrentScore(diceValue);
        }
    }
}

function newGame() {
    console.log("new game");
    document.querySelector(".dice").style = "display: none";
    diceValue = 5;
    player0.ResetAllScore();
    player1.ResetAllScore();
    player1.TransferControl(player0);
    player0.winner = false;
    player1.winner = false;
    document.querySelector(".player--0").classList.remove("player--winner");
    document.querySelector(".player--1").classList.remove("player--winner");
}
document.querySelector(".btn--new").addEventListener("click", newGame);
document.querySelector(".btn--roll").addEventListener("click", rollDice);
document.querySelector(".btn--hold").addEventListener("click", hold);

function hold() {
    if (player0.winner || player1.winner) return;
    if (player0.myTurn === true) {
        player0.AddScore();
        if (player0.score >= 20) {
            console.log("player1 win");
            player0.winner = true;
            document.querySelector(".player--0").classList.add("player--winner");
            document.querySelector(".dice").style = "display: none";
        } else {
            player0.TransferControl(player1);
        }
    } else {
        player1.AddScore();
        if (player1.score >= 20) {
            console.log("player2 win");
            player1.winner = true;
            document.querySelector(".player--1").classList.add("player--winner");
            document.querySelector(".dice").style = "display: none";
        } else {
            player1.TransferControl(player0);
        }
    }
}

newGame();
