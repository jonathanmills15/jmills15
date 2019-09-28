//1.
var target
var guess_input;
var finished = false;
var gameCount = 0;
colors =["azure", "aliceblue", "bisque", "burlywood", "chartreuse", "cyan", "cornflowerblue",
"darkorchid", "dodgerblue", "gainsboro", "goldenrod", "magenta", "moccasin", "navy", "peachpuff", "pink", "red",
"silver", "violet", "wheat"];
//2.
function do_game() {
	colors = colors.sort();
//2.1
var target_index = Math.floor(Math.random() * (colors.length - 0)) + 0;
//2.2
var target = colors[target_index];
var message = "I am thinking of one of these colors \n\n"
for (var i = 0 ; i < colors.length ; i++) {
	message += colors[i];

	if (i == (colors.length-2)){
	message += " and ";
	
	} else if (i != (colors.length-1)) {
		message += ", ";
					}
				}	
//2.3
while (!finished){
	guess_input = prompt(message).toLowerCase();
	gameCount++;
	finished = check_guess(guess_input,target);
	if (finished) {
	
	 document.body.style.backgroundColor = target; document.body.style.backgroundImage = "url('https://i.kym-cdn.com/entries/icons/original/000/002/827/likeaboss.jpg')"; 
	alert("Like a boss! You have guessed the color!\n\nIt took you " + gameCount + " guesses to finish the game!\n\nYou can see the color in the background.");}}

//3.
function check_guess(guess, target) {
	if (colors.indexOf(guess)<0) {
//3.1
	alert("Sorry, I don't recognize your color.\n\nPlease try again.");
	return false;
	} else if(guess > target) {
//3.2
	alert("Sorry, your guess is not correct, but don't give up!\n\nHint: The color you guessed is alphabetically higher than mine.\n\nPlease try again.");
	} else if (guess < target) {
//3.3
	alert("Sorry, your guess is not correct, but don't give up!\n\nHint: The color you guessed is alphabetically lower than mine.\n\nPlease try again.");
	} else 
	{return true;}
}}