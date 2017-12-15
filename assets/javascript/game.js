// =============
// App variables
// =============

var jewelValues;
var redJewel;
var blueJewel;
var yellowJewel;
var greenJewel;
var targetNum;
var wins;
var losses;
var totalScore;

// ==========
// Functions
// ==========

function ranNum(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
};

ranNum(1, 12);

function hasWon() {
	if (totalScore === targetNum) {
		$("total-score").text(totalScore);
		wins++;
		$("#message").text("You won!!")
		$("#wins").append(wins);
		console.log("You won!");
	};
};

function hasLost() {
	if (totalScore > targetNum) {
		$("total-score").text(totalScore);
		losses++;
		$("#message").text("You lost!!")
		$("#losses").append(losses);
		console.log("You lost!");
	}
}
function initializeGame() {

	jewelValues = ["", "", "", ""];

	/*I tried to write the following line in such a way that there if there were duplicates the function would be called coninually until all values were different. I gave up.*/
	for (var i = 0; i < jewelValues.length; i++) {
			jewelValues[i] = ranNum(1, 12);	
		};
	wins = 0;
	losses = 0;
	totalScore = 0;
	winner = false;
	loser = false;
	redJewel = jewelValues[0];
	blueJewel = jewelValues[1];
	yellowJewel = jewelValues[2];
	greenJewel = jewelValues[3];
	targetNum = ranNum(19, 120);

	$("#random-number").text(targetNum);

	$("#wins #losses #total-score").empty();

	//===============
	//On-Click Events
	//===============

	$("#red-jewel").on("click", function() {
		totalScore += redJewel;
		$("#total-score").text(totalScore);
		hasWon();
		hasLost();
	});

	$("#blue-jewel").on("click", function() {
		totalScore += blueJewel;
		$("#total-score").text(totalScore);
		hasWon();
		hasLost();
	});

	$("#yellow-jewel").on("click", function() {
		totalScore += yellowJewel;
		$("#total-score").text(totalScore);
		hasWon();
		hasLost();
	});

	$("#green-jewel").on("click", function() {
		totalScore += greenJewel;
		$("#total-score").text(totalScore);
		hasWon();
		hasLost();
	});
};

$(document).ready(function() {

	initializeGame();
	
	console.log(jewelValues);
	console.log(targetNum);
});