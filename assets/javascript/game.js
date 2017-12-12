$(document).ready(function() {

	var jewelValues;
	var getButtonVal;
	var ranNum;
	var wins;
	var losses;

	function initializeGame() {

		jewelValues = ["", "", "", ""];
		getButtonVal = function(min, max) {
			min = Math.ceil(1);
			max = Math.floor(12);
			return Math.floor(Math.random() * (12 - 1)) + 1;
		};
		wins = "";
		losses = "";
		ranNum = function(min, max) {
			min = Math.ceil(19);
			max = Math.floor(120);
			return Math.floor(Math.random() * (120 - 19)) + 19;
		};

		

		$.each(jewelValues)

		$("#random-number").text(ranNum);

		$("#wins #losses #total-score").empty();

		jewelValues

	};


	initializeGame();
	
	console.log(jewelValues);
});