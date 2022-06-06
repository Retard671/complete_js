"use strict";

let myNumber;
myNumberFunction();
function myNumberFunction() {
	myNumber = Math.floor(Math.random() * 20) + 1; //range 1-20
	console.log("myNumber", myNumber);
}

let score = 20;
let bestScore = 0;

//
function guessedRight() {
	console.log("guessedRight");

	let background = document.querySelector("body");
	background.style.backgroundColor = "#60b347";

	document.querySelector(".message").textContent = "You're God damn right!";
	if (score > bestScore) {
		bestScore = score;
		document.querySelector(".highscore").textContent = score;
	}
	document.querySelector(".number").textContent = myNumber;
	document.querySelector(".number").style.width = "30rem";
}

document.querySelector(".check").addEventListener("click", checkResult);

function checkResult() {
	let guess = Number(document.querySelector(".guess").value);
	console.log("guess", guess);
	// console.log("myNumber", myNumber);

	if (!guess) {
		document.querySelector(".message").textContent = "Not number";
	} else if ((score <= 1 && guess < myNumber) || (score <= 1 && guess > myNumber)) {
		document.querySelector(".score").textContent = 0;
		document.querySelector(".message").textContent = "You loose";
	} else if (guess === myNumber) {
		guessedRight();
	} else if (guess < myNumber) {
		document.querySelector(".message").textContent = "Too low!";
		document.querySelector(".score").textContent = --score;
	} else if (guess > myNumber) {
		document.querySelector(".message").textContent = "Too high!";
		document.querySelector(".score").textContent = --score;
	}
}

// again
document.querySelector(".again").addEventListener("click", () => {
	console.log("again arow");
	score = 20;
	document.querySelector(".number").textContent = "?";
	myNumberFunction(); // генерируем новое число
	document.querySelector(".number").style.width = "15rem";
	document.querySelector("body").style.backgroundColor = "#222";
	// задний фон
	document.querySelector(".guess").value = "";
	document.querySelector(".message").textContent = "Try me, bitch!";
	document.querySelector(".score").textContent = 20;
});

//
//
//
//
//
//
//
