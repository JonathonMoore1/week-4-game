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

	function initializeGame() {

		jewelValues = ["", "", "", ""];
		getButtonVal = function(min, max) {
			min = Math.ceil(1);
			max = Math.floor(12);
			return Math.floor(Math.random() * (12 - 1)) + 1;
			for (var i = 0; i < jewelValues.length; i++) {
				getButtonVal(jewelValues[i]);
			};
		};
		wins = "";
		losses = "";
		ranNum = function(min, max) {
			min = Math.ceil(19);
			max = Math.floor(120);
			return Math.floor(Math.random() * (120 - 19)) + 19;
		};
		redJewel = jewelValues[0];
		blueJewel = jewelValues[1];
		yellowJewel = jewelValues[2];
		greenJewel = jewelValues[3];



		getButtonVal();

		$("#random-number").text(ranNum);

		/*jewelValues.forEach(getButtonVal("") {

		});*/

		$("#wins #losses #total-score").empty();



		

	};


	initializeGame();
	
	console.log(jewelValues);
});