// Guesser Assignment

let alphab = ""; // uneccessary

function letterGuesser() {
  // splits characters into an array
  let aTOz = "abcdefghijklmnopqrstuvwxyz".split("");
  // test accuracy:
  console.log(aTOz); // prints when function is called
  // random # btwn 0 and length of aTOz
  let randNum = Math.floor(Math.random() * aTOz.length);
  // initialize random choice of letter
  let randLet = aTOz[randNum];
  // informs and gets info (a #)
  let inPut = prompt(`Your Letter is: ${randLet}. Guess ${randLet}'s index: `);
  // transforms input to an integer
  let promptA = parseInt(inPut);
  // test accuracy:
  console.log(promptA);
  
  let = actualIndex = aTOz.indexOf(randLet);
  
  if (promptA == actualIndex) {
  	alert("You definitely know the alphabet!");
  	} else {
    		alert(`Incorrect. You'll have to relearn the ABCs. The index of ${randLet} is ${actualIndex}`);
  	}
} // END OF FUNCTION


// calling of function
 letterGuesser();


