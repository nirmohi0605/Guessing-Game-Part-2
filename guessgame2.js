var answer = 0;
var numGuess = 5;


$(document).ready(function(){
	var $input = $("input");
	answer = Math.floor((Math.random() * 100) + 1);
	//answer = 8;
	$("#Go").click(function() {
		if((($("#playersguess").val()) > 100)|| (($("#playersguess").val()) < 0)){
			alert('Invalid Guess');
		}
		else GuessPls($input.val());
	});
	$("#playersguess").keypress(function(e) {
		if (e.keyCode == 13) {
			if((($("#playersguess").val()) > 100)|| (($("#playersguess").val()) < 0)){
			alert('Invalid Guess');
		}
			else GuessPls($input.val());
		}
	});
	debugger;

	$("#Reset").click(function() {
		location.reload();

	});

	$("#Hint").click(function(){
		if(numGuess === 5){
			alert('You need to guess atleast once!');
		}
		else{ $('#answer').text("The answer is  " + answer)}

	});

});


function GuessPls(guess) {
	if (numGuess > 0) {
		if (guess == answer) {
			correctGuess();

		} else if (answer - guess <= 5 && answer - guess > 0) {
			tryHigher(guess);
			hot();
		} else if (guess - answer <= 5 && guess - answer > 0) {
			tryLower(guess);
			hot();
		} else if (answer - guess <= 10 && answer - guess > 0) {
			tryHigher(guess);
			warm();
		} else if (guess - answer <= 10 && guess - answer > 0) {
			tryLower(guess);
			warm();
		} else if (answer - guess <= 20 && answer - guess > 0) {
			tryHigher(guess);
			cold();
		} else if (guess - answer <= 20 && guess - answer > 0) {
			tryLower(guess);
			cold();
		} else if (guess > answer) {
			tryLower(guess);
			iceCold();
		} else {
			tryHigher(guess);
			iceCold();
		};
		numGuess--;
		$('#NumGuess').text("Guesses remaining: " + numGuess);
		if (numGuess === 0) {
		if(guess== answer) {
				correctGuess();
			}
		else { gameOver();
		}	
		
	};
	
};

};

function correctGuess(){
	$("h2").text("You Got It!");
	$("body").css("background","url(Correct.png) no-repeat");
	$("body").css("background-size","cover");

}

function gameOver(){
	$("h2").text("Game Over. Hit Restart to play again!");
	$("body").css("background","url(sherlock_title.png) no-repeat");
	$("body").css("background-size","cover");	

}

function tryLower(guess) {
	$("#direction").text("Try Lower");
		
}

function tryHigher(guess) {
	$("#direction").text("Try Higher");
	
}
function hot() {
	$("#Temperature").text("Hot, ");
	$("body").css("background","url(Hot.png) no-repeat");
	$("body").css("background-size","cover");
}

function iceCold() {
	$("#Temperature").text("Ice Cold, ");
	$("body").css("background","url(Cold.png) no-repeat");
	$("body").css("background-size","cover");
}

function cold() {
	$("#Temperature").text("Cold, ");
	$("body").css("background","url(Cold.png) no-repeat");
	$("body").css("background-size","cover");
}

function warm() {
	$("#Temperature").text("Warm, ");
	$("body").css("background","url(Hot.png) no-repeat");
	$("body").css("background-size","cover");
};