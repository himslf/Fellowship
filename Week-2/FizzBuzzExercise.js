// with function:
function fizzBuzz(x) {
  if (x % 3 == 0 && x % 5 == 0) {
    console.log("FizzBuzz");
  	} else if (x % 3 == 0) {
    	console.log("fizz");
  	} else if (x % 5 == 0) {
    	console.log("buzz");
  	} else {
    	console.log(x);
  	}
};

fizzBuzz(15); // returns FizzBuzz
fizzBuzz(9);	// returns fizz
fizzBuzz(10);	// returns buzz
fizzBuzz(1);	// returns 1

// OR
console.log("---------+---------")
// using a for loop
let ex = 205; // change as desired
let result = "";

for (var i = 1; i <= 1; i++) {
	if (ex % 3 == 0 && ex % 5 == 0) {
		console.log("FizzBuzz");
		} else if (ex % 3 == 0) {
			console.log("fizz");
  		} else if (ex % 5 == 0) {
    		console.log("buzz");
  		} else {
    		console.log(ex);
  		}
}; // end of for-loop