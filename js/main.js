//create a random number
var randomNumber = Math.floor(Math.random() * 100) + 1;

//create variables that cn reffer to results or outcomes
//Query all variable refferences

var guesses = document.querySelector('guesses');
var lastResult = document.querySelector('lastResult');
var lowOrHi  = document.querySelector('lowOrHi');

var guessField = document.querySelector('guessField');
var guessSubmit = document.querySelector('guessSubmit');

var guessCount = 1;
var resetButton;

function checkGuess() {
	// get user input and run it through a Number function that checks to make sure its a number.
	var userGuesses = Number(guessField.value);
	//check if this is the user's first guess
	if ( guessCount === 1 ) {
		guesses.textContent = 'previous guesses'; //it there is a legit first guess then we display this info.
	}
    guesses.textContent += userGuesses + ' ';

    if(userGuesses === randomNumber) {
         lastResult.textContent = 'Congratulations! You got it right!';
         lastResult.style.background = '#01FF70';
         lowOrHi.textContent = '';
         setGameOver();

    } else if( guessCount === 10 ){
    	lastResult.textContent = '!!GAME OVER!!!';
    	setGameOver();

    }else{
    	lastResult.textContent = 'WRONG';
    	lastResult.style.background = '#FF4136';
    	if(userGuesses < randomNumber) {
           lowOrHi.textContent ='Last Guess was too low!';
    	}else if(userGuesses > randomNumber) {
    		lowOrHi.textContent = 'Last Guess was too High';
    	}
    }

    guessCount++;
    guessField.value = ' ';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
	guessField.disable =true;
	guessSubmit.disable = true;
	resetButton = document.createElement('Button');
	resetButton.textContent =' Start ne game';
	document.body.appendChild(resetButton);
	resetButton.addEventListener('click', resetGame);
}

function resetGame() { 
	guessCount = 1;

	var reseParas = document.querySelectorAll('.resultParas p');
	for(i = 0; i < resultPara.length; i++){
		resetParas[i].textContent = ' ';
	}
    resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;

}
