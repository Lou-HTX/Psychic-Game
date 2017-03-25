	// array of engilish alphabet
	var computer = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
		'v', 'w', 'x', 'y', 'z'];
	
    // Variables for tracking our wins and losses. 
    var wins = 0;
    var losses = 0;
    // variable for tracking total guesses left til game resets.
    var guessesLeft = 9;
    // array setup to log keys pressed for guesses. 
    var guessesSoFar = [];

    // When the user presses a key, it will run the following function...
    document.onkeyup = function(event) {

	    // Determine which key was pressed
	    var userGuess = event.key;
	    // pushes keys pressed to array for guesses.
	    guessesSoFar.push(userGuess);

	    // Sets the computerGuess variable equal to a random choice from the computer array.
	    var computerGuess = computer[Math.floor(Math.random() * computer.length)];
	      
	    //if the guessesleft are equal to 0 then the game is reset.          
	    if (guessesLeft === 0) {
	      	guessesLeft = 9;
	       	losses++;
	       	guessesSoFar = [];
	        }
	    //if the user guesses the same as the computer then the win counter goes up by one.
	    else if (userGuess === computerGuess) {
	    	   	wins++;
	        }
	    //if the users guess is not the same at the computer then the losses counter goes up by one.  
	    else if (userGuess !== computerGuess) {
		       	guessesLeft--;
	        };
	        
	    // Here we create the HTML that will be injected into our div and displayed on the page.
	    var html = 
	      "<h2>Guess what letter I'm thinking of?</h2>" +
	      "<p>Wins: " + wins + "</p>" +
	      "<p>Losses: " + losses + "</p>" +
	      "<p>Guesses Left: " + guessesLeft + "</p>" +
	      "<p>Your Guesses so Far: " + guessesSoFar + "</p>";

	    // Injecting the HTML we just created into our div and updating the game information on our page.
	    document.getElementById("game").innerHTML = html;
    };