// Starting game state
// =====================
var jewels = {
	red: {name: "Red", value: 0},
	blue: {name: "Blue", value: 0},
	yellow: {name: "Yellow", value: 0},
	green: {name: "Green", value: 0}
};

var currentScore = 0;
var targetScore = 0;

var wins = 0;
var losses = 0;

//==============================
function ranNum(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
};

function initializeGame() {

	currentScore = 0;

	targetScore = ranNum(19, 120);

	jewels.red.value = ranNum(1, 12);
	jewels.blue.value = ranNum(1, 12);
	jewels.yellow.value = ranNum(1, 12);
	jewels.green.value = ranNum(1, 12);

	$("#target-score").html(targetScore);
	$("#current-score").html(currentScore);
	$("#wins").html("Wins: " + wins);
	$("#losses").html("Losses: " + losses);

	console.log("-----------------------------------");
  console.log("Target Score: " + targetScore);
  console.log("Red: " + jewels.red.value + " | Blue: " + jewels.blue.value + " | Yellow: " + jewels.yellow.value +
    " | Green: " + jewels.green.value);
  console.log("-----------------------------------");

};

function hasWon() {
	if (currentScore > targetScore) {
		$("#current-score").html(currentScore);
		losses++;
		alert("You lost!!");
		$("#losses").text(losses);
		console.log("You lost!");
		initializeGame();
	}
	else if (currentScore === targetScore) {
		$("#current-score").html(currentScore);
		wins++;
		alert("You've won!!");
		$("#wins").text(wins);
		console.log("You've won!");
		initializeGame();
	};
};

function addValues(clickedJewel) {
	currentScore += clickedJewel.value;
	$("#current-score").html(currentScore);
	hasWon();
	console.log("Your score: " + currentScore);
}

$(document).ready(function () {

	initializeGame();
	$("#red-jewel").on("click", function() {
		addValues(jewels.red);
		console.log("clicked");
	});
	
	$("#blue-jewel").on("click", function() {
		addValues(jewels.blue);
		console.log("clicked")
	});
	
	$("#yellow-jewel").on("click", function() {
		addValues(jewels.yellow);
		console.log("clicked")
	});
	
	$("#green-jewel").on("click", function() {
		addValues(jewels.green);
		console.log("clicked")
	});

	console.log(jewels);
	console.log(targetScore);
});