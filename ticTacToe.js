window.onload = init;

//listen for button click events
function init() {

	//global variables used to modify span contents when a move is played. See http://stackoverflow.com/questions/2291252/variable-not-accessible-when-initialized-outside-function
	span1 = document.getElementById("span1");
	span2 = document.getElementById("span2");
	span3 = document.getElementById("span3");
	span4 = document.getElementById("span4");
	span5 = document.getElementById("span5");
	span6 = document.getElementById("span6");
	span7 = document.getElementById("span7");
	span8 = document.getElementById("span8");
	span9 = document.getElementById("span9");
	moves = [span1, span2, span3, span4, span5, span6, span7, span8, span9]; //array containing all the spans

	//button event listeners
	var button1 = document.getElementById("button1");
	button1.onclick = handleButton1;

	var button2 = document.getElementById("button2");
	button2.onclick = handleButton2;

	var button3 = document.getElementById("button3");
	button3.onclick = handleButton3;

	var button4 = document.getElementById("button4");
	button4.onclick = handleButton4;

	var button5 = document.getElementById("button5");
	button5.onclick = handleButton5;

	var button6 = document.getElementById("button6");
	button6.onclick = handleButton6;

	var button7 = document.getElementById("button7");
	button7.onclick = handleButton7;

	var button8 = document.getElementById("button8");
	button8.onclick = handleButton8;

	var button9 = document.getElementById("button9");
	button9.onclick = handleButton9;
}

//variables used to insert new HTML into each cell on the game board
var goX = "| X |";
var goO = "| O |";

//Turns button into text when clicked to play a user move
function handleButton1() {
	span1.innerHTML = goX;
	winLose();
	computerTurn(); //why does this function call only work when the "()" are included on the end?
}

function handleButton2() {
	span2.innerHTML = goX;
	winLose();
	computerTurn();
}

function handleButton3() {
	span3.innerHTML = goX;
	winLose();
	computerTurn();
}

function handleButton4() {
	span4.innerHTML = goX;
	winLose();
	computerTurn();
}

function handleButton5() {
	span5.innerHTML = goX;
	winLose();
	computerTurn();
}

function handleButton6() {
	span6.innerHTML = goX;
	winLose();
	computerTurn();
}

function handleButton7() {
	span7.innerHTML = goX;
	winLose();
	computerTurn();
}

function handleButton8() {
	span8.innerHTML = goX;
	winLose();
	computerTurn();
}

function handleButton9() {
	span9.innerHTML = goX;
	winLose();
	computerTurn();
}

var hasWon = false; //global variable used to test whether the user has won. If true, computer will not play another move.
var hasLost = false;
var isDraw = false;

//Makes the computer play a turn
function computerTurn() {
	if (hasWon == false && hasLost == false && isDraw == false) { //keeps computer from playing further moves if someone has won
		//more advanced computer move functions should go here
		randomMove();
		winLose();
	}
}

//this makes the computer place an "O" in a random position on the game board
function randomMove() {
	var i = Math.floor(Math.random() * moves.length);
	if (moves[i].innerHTML != goX && moves[i].innerHTML != goO) { //test whether the chosen move has been played. If not play an "O".
		moves[i].innerHTML = goO;
	} else randomMove(); //recursion?
}

//tests whether or not the current moves result in a win or loss for the user.
function winLose() {

	//arrays representing winning combinations
	var win1 = [span1, span2, span3];
	var win2 = [span4, span5, span6];
	var win3 = [span7, span8, span9];
	var win4 = [span1, span4, span7];
	var win5 = [span2, span5, span8];
	var win6 = [span3, span6, span9];
	var win7 = [span1, span5, span9];
	var win8 = [span3, span5, span7];
	
	//variables for tracking how many Xs or Os appear in a row, up to 3.
	var win = 0;
	var lose = 0;

	var winArray = [win1, win2, win3, win4, win5, win6, win7, win8]; //Array containing all the win arrays to make them available in a loop
	var winX;

	for (var w = 0; w < winArray.length; w++) { //look at all winning scenarios and see if any have been met
		
		winX = winArray[w];
		

		for (var i = 0; i < winArray[w].length; i++) { //this loop counts how many Xs or Os are in each possible winning combination
			
			if (winX[i].innerHTML == goX) {
				win = win + 1;
			}

			if (winX[i].innerHTML == goO) {
				lose = lose + 1;
			}
		}

		if (win == 3) { //if three Xs in a row, user wins
			hasWon = true;
			win = 0;
		} else {
			win = 0; //reset the win counter before looping through again to prevent multiple "Win" alerts
		}

		if (lose == 3) { //three Os in a row means computer wins
			hasLost = true;
			lose = 0;
		} else {
			lose = 0;
		}
	}

	drawTest();

	if (hasWon == true) {
		alert("You win!");
	} else if (hasLost == true) {
		alert("Computer wins : (");
	} else if (isDraw == true) {
		alert("Draw : /");
	}
}

//tests to see if all playable options are eliminated and if so, changes var isDraw to true
function drawTest() {
	isDraw = true;
	for (var i = 0; i < moves.length; i++) {
		if (moves[i].innerHTML != goX && moves[i].innerHTML != goO) {
			isDraw = false;
		}
	}
}

function threeInaRow() {

	//arrays representing winning combinations
	var win1 = [span1, span2, span3];
	var win2 = [span4, span5, span6];
	var win3 = [span7, span8, span9];
	var win4 = [span1, span4, span7];
	var win5 = [span2, span5, span8];
	var win6 = [span3, span6, span9];
	var win7 = [span1, span5, span9];
	var win8 = [span3, span5, span7];

	var winArray = [win1, win2, win3, win4, win5, win6, win7, win8]; //Array containing all the win arrays to make them available in a loop
	var w = 0;
	var winX;
/*
	Pseudocode
	-check each win array for a span that already contains one or more goO's
	-from these arrays, if there is a win array that has two goOs instead of one, choose that one
	-if it contains a goX, move on
	-

*/

}