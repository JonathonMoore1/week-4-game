$(document).ready(function() {

	var jewelValues;
	var getButtonVal;
	var redJewel;
	var blueJewel;
	var yellowJewel;
	var greenJewel;
	var ranNum;
	var wins;
	var losses;
	var totalScore;

	function initializeGame() {

		jewelValues = ["", "", "", ""];
		getButtonVal = function() {
			var min = 1;
			var max = 12;
			return Math.floor(Math.random() * (12 - 1)) + 1;
		};
		for (var i = 0; i < jewelValues.length; i++) {
				jewelValues[i] = getButtonVal();	
			};
		wins = "";
		losses = "";
		ranNum = function(min, max) {
			min = Math.ceil(19);
			max = Math.floor(120);
			return Math.floor(Math.random() * (120 - 19)) + 19;
		};
		totalScore = 0;
		redJewel = jewelValues[0];
		blueJewel = jewelValues[1];
		yellowJewel = jewelValues[2];
		greenJewel = jewelValues[3];


		$("#random-number").text(ranNum);

		$("#wins #losses #total-score").empty();


		$("#red-jewel").on("click", function() {
			totalScore += redJewel;
			$("#total-score").text(totalScore);
		});

		$("#blue-jewel").on("click", function() {
			totalScore += blueJewel;
			$("#total-score").text(totalScore);
		});

		$("#yellow-jewel").on("click", function() {
			totalScore += yellowJewel;
			$("#total-score").text(totalScore);
		});

		$("#green-jewel").on("click", function() {
			totalScore += greenJewel;
			$("#total-score").text(totalScore);
		});



		

	};


	initializeGame();
	
	console.log(jewelValues);
});