const playerScore = document.getElementById('playerScore'),
	compScore = document.getElementById('compScore'),
	choiceBox = document.getElementById('choice'),
	choice = document.querySelectorAll('#choice .choice-btn'),
	display = document.getElementById('display'),
	startBtn = document.getElementById('start'),
	playAgain = document.getElementById('playAgain'),
	reset = document.getElementById('reset'),
	result = document.getElementById('result'),
	displayPlayer = document.getElementById('displayPlayer'),
	displayComp = document.getElementById('displayComp');

var playerWin = 0;
var compWin = 0;
const emoji = { paper: '🖐', scissors: '✌', rock: '✊' };

// let the war begin~~~~
function fighting(player) {
	// set a choice for ai and random it
	const weapon = ['paper', 'scissors', 'rock'];
	const choose = Math.floor(Math.random() * weapon.length);
	const compWeapon = weapon[choose];

	// check the result, increase score and then display
	if (player === compWeapon) {
		displayPlayer.innerHTML = emoji[player];
		displayComp.innerHTML = emoji[compWeapon];

		result.innerHTML = `Drawww~ <br> 😎🤖`;
	} else if ((player === 'paper' && compWeapon === 'rock') || 
	(player === 'rock' && compWeapon === 'scissors') || 
	(player === 'scissors' && compWeapon === 'paper')) {
		displayPlayer.innerHTML = emoji[player];
		displayComp.innerHTML = emoji[compWeapon];
		
		result.innerHTML = `You win!!! 🎉`;
		playerWin++;
	} else {
		displayPlayer.innerHTML = emoji[player];
		displayComp.innerHTML = emoji[compWeapon];

		result.innerHTML = `You lose!!! 🐱‍👤`;
		compWin++;
	}

	playerScore.innerHTML = playerWin;
	compScore.innerHTML = compWin;
}

// play again button
playAgain.addEventListener('click', letsWarAgain);
// hide the recently result and back to choose your choice again
function letsWarAgain() {
	choiceBox.style.display = 'inline';
	display.style.display = 'none';
}

// reset button
reset.addEventListener('click', resetWar);
// reset every single value
function resetWar() { 
	choiceBox.style.display = 'inline';
	display.style.display = 'none';
	playerWin = 0;
	compWin = 0;
	playerScore.innerHTML = playerWin;
	compScore.innerHTML = compWin;
	result.innerHTML = '';
	choice.forEach(btns => btns.classList.remove('active'));
}

// start button
startBtn.addEventListener('click', startWar);

function startWar() {	
	let ready = false;
	// check player choice by looking for button that got an active class 
	choice.forEach(btns => {
		if (btns.classList.contains('active')) {
			// hide choice for a result display
			choiceBox.style.display = 'none';
			display.style.display = 'inline';
			ready = !ready;

			// start the war~~
			fighting(btns.value);
		}
	});

	// if player dont choose thier choice alert a message
	if (!ready) alert('Pleas select youe WEAPON!!!');
}
// check active class button 
choice.forEach(btns => btns.addEventListener('click', activeClass));

//add active class when player click thier choice 
//and remove active class for previous button 
function activeClass() {
	choice.forEach(btns => btns.classList.remove('active'));
	this.classList.add('active');
}