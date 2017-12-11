$(document).ready(function() {

	var jewelValues;
	var ranNum;
	var wins;
	var losses;

	function initializeGame() {

		jewelValues = ["", "", "", ""];
		wins = "";
		losses = "";
		ranNum = function(min, max) {
			min = Math.ceil(19);
			max = Math.floor(120);
			return Math.floor(Math.random() * (120 - 19) + 19);
			$("#random-number").text(ranNum);
			console.log(ranNum);
		};

		ranNum();

	}


	initializeGame();
	

});