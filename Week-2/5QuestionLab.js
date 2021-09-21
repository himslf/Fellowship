// #1 DrEvil
//create a function called DrEvil. It should take a single argument, an amount
//and return '<amount> dollars', except it will add '(pinky)' at the end if 
//the amount is 1 million. For example:
// DrEvil(10): 10 dollars
// DrEvil(1000000): 1000000 dollars (pinky)
// answer below:

function DrEvil (amount) {
	if (amount == 1000000) {
	console.log(amount + " dollars! (pinky)");
	} else {
		console.log(amount + " dollars.");
	}
};

DrEvil(1421094); // returns 1421094 dollars.
DrEvil(1000000); // 1000000 dollars! (pinky)


console.log("---------+---------")
// #2 Create a function called mixUp
//It should take in two stings, and return the concatenation of the two strings(separated by a space)
//slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. 
//For example:
//mixUp('mix', 'pod'): 'pox mid'
//mixUp('dog', 'dinner'): 'dig donner'
//write answer below 

function mixUp(word1, word2) {
	return word2.slice(0, 2) + word1.slice(2) + " " + word1.slice(0, 2) + word2.slice(2);
};

console.log(mixUp("Knowledge", "House"));


console.log("---------+---------")
// #3 Create a function called fixStart
//It should take a single argument, a string, and return a version where all occurences of its first
//character have been replaced with '*', except for the character itself. 
//fixstart('babble'): 'ba**le'
//write answer below

function fixStart (leString) {
	// establishing 'exclusive' letter
	let karac = leString.charAt(0);
	return karac + leString.slice(1).replace(new RegExp(karac, 'g'), '*');
}

console.log(fixStart("JumpingJahasfatsJeeWillikers"));
// i had to look up the RegExp object


console.log("---------+---------")
// #4 Create a function called verbing. It should take a single argument, a string.
//If it's length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
//in which case it should add 'ly' instead. If the string length is less than 3, 
//it should leave it unchanged. For example: 
//verbing('swim'): 'swimming'
//verbing('swimming'): 'swimmingly'
//verbing('go'): 'go'
//write answer below

function verbing(term) {
  if (term.length < 3) {
  	return term
	}
    
  if (term.slice(-3) == 'ing') {
    return term + 'ly';
	} else {
    return term + 'ing';
  }
} // end of function

console.log(verbing("run"));
console.log(verbing("pontificate"));
console.log(verbing("Yo"));






console.log("---------+---------")
// #5 Create a function called notBad that takes a single argument, a string
//It should find the first appearance of the substring 'not' and 'bad'
//If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad'
//substring with 'good' and return the result
//If it doesn't find 'not' and 'bad' in the right sequence (or at all), just 
//return the original sentence
//For example
//notBad('This dinner is not that bad!'): 'This dinner is good!'
//notBad('This movie is not so bad!'): 'This movie is good!'
//notBad('This dinner is bad!'): 'This dinner is bad!'
//write answer below 

function notBad(expressi0n) {
  var houseOfNot = expressi0n.indexOf('not');
  var groupOfBad = expressi0n.indexOf('bad');
  if (houseOfNot == -1 || groupOfBad == -1 || groupOfBad < houseOfNot) return expressi0n;
  return expressi0n.slice(0, houseOfNot) + 'good' + expressi0n.slice(groupOfBad + 3);
}

console.log(notBad("Staying up this late is not that bad!"));
console.log(notBad("Waking up at 3:00PM is not so bad!"));
console.log(notBad("Poor indentation is bad!"));
console.log(notBad("Staying up this late not is that bad!")); // hmmmm...
console.log(notBad("Staying up this late ain't that bad!")); // hmmmm...



