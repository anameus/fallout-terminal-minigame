let selectionOfWords = ["acacias","academy","adapted","adamant","affiant",
						"airport","airmail","alleged","allegro","algebra",
						"balloon","balcony","barbell","bargain","barkeep",
						"bassist","battery","bazooka","bearded","because",
						"careers","cartoon","chopper","Circuit","Combust",
						"Compare","Compose","Cutlery","Cyclone","Cynical"]

let availableWords = [] 
let theWord = ""
let guessedWords = []
let attemptsLeft = 3

function populateWords() { 
	for(k = 0; k < 5; k++){
		let randomIndex = Math.floor(Math.random()*(selectionOfWords.length))		
		$('.pickword-wrapper').append("<p>"+selectionOfWords[randomIndex]+"</p>")
		let newAvailibleWord = selectionOfWords[randomIndex];
		availableWords.push(newAvailibleWord)
		selectionOfWords.splice(randomIndex, 1)
	}
}

function chooseTheWord(){
	let indexOfWord = Math.floor(Math.random()*(availableWords.length))
	theWord = availableWords[indexOfWord]
	console.log(theWord)
}

function main(){
	$('.show-attempts-left').text("Attempt(s) left: " + attemptsLeft)
	$(".terminalLocked").hide()
	$(".accessGranted").hide()

	$('.pickword-wrapper').on('click','p',function(){
		attemptsLeft--
		guessedWords.push(this.innerHTML)
		let numberOfBulls = 0 //reference to the Bull and Cow word game
		for(i = 0; i < theWord.length; i++){
			if (this.innerHTML[i] === theWord[i]){
				numberOfBulls = numberOfBulls + 1
			}else{
				i++
			}
		}
		
		$('.let-guessed-word-appear-here').append("<p>"+this.innerHTML+" "+numberOfBulls+"/7 correct. </p>")
		guessedWords.pop()

		$('.show-attempts-left').text("Attempt(s) left: " + attemptsLeft)
		
			if((this.innerHTML) === theWord && attemptsLeft > 0){
				$('.pickword-wrapper').hide();
				$('.accessGranted').show();

			}else if(attemptsLeft === 0 && (this.innerHTML) === theWord){
				$('.pickword-wrapper').hide();
				$('.accessGranted').show();
			}

			else if(attemptsLeft === 0 && (this.innerHTML) !== theWord) {
				console.log("Terminal locked")
				$('.pickword-wrapper').hide();
				$(".terminalLocked").show();
				$('.show-attempts-left').hide();
			}
})
}

$(document).ready(main)



