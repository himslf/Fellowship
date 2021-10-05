//Exercise #1
//Write a function that loops over the following array of TKH students
// and prints out their name and what class they are currently in.
const students = [
  "Angel",
  "Ayman",
  "David",
  "Diana",
  "Ezra",
  "Jahaziel",
  "Jennifer",
  "Julian",
  "Katherine",
  "Leesel",
  "Naeem",
  "Nashid",
  "Quiana",
  "Shafee",
  "Shan",
  "Stephanie",
  "Tinesha",
  "Zipporah",
];

let classList = ["PWD", "DS", "CS"];

function TKHers(array1, array2) {
	for (let i = 0; i < array1.length; i++) {
  	console.log(`${array1[i]} is a part of the ${array2[1]} cohort.`);
   } // endFOR


} // EndFUNC.
TKHers(students, classList)


//Exercise #2
//Write a function named calculateDogAge that:
//takes one argument: your puppy's age
//calculates your dog's age based on the conversion rate of
// 1 human year to 7 dog years
//outputs the result to the screen like so:
//"Your dog is something years old in dog years"
//call the function with different sets of values
//Add an additional argument to the function that takes the conversion
//rate of human to dog years

// the orginal explanation wasn't concrete so i
// coded the function as one might typically expect.

function calcDogAge(humanYears) {
	let dogAge = humanYears * 7;
  console.log(`${humanYears} 'human-years' mean ${dogAge} in dog-years!`)
} //endFUNC
calcDogAge(4)
calcDogAge(6)
calcDogAge(9)

//Exercise #3
//Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day
// calculates the amount consumed for the rest of the life(based on a benchmark age)
//  outputs the result to the screen like so: "You will need SOMETHING to last you until the age of X"
// Call that function several times, using different values each time
// Bonus: accept floating point values for amount per day, and round the
// result to a round number


// ** i sincerely don't understand what we're supposed to be calculating **







//Exercise #4
//http://math2.org/math/geometry/circles.htm
//
//Create 2 functions that calculate properties of a circle:
//First: Create a function called calcCircumference
// - Pass the radius to the function
// - Calculate the circumference based on the radius
// - and output " The circumference is SOMETHING"
// Second: Create a function called calcArea:
// - Pass the radius to the function
// - Calculate the area based on the radius and output "The area is SOMETHING"

const pi = 3.141
function calcCircum (radiusVal) {
	let cumfrence = (2 * pi) * radiusVal;
  console.log(`The circumference is ${cumfrence}`)
} // endFUNC
calcCircum(6)

function calcArea (radiusVal) {
	let area = pi * (radiusVal * radiusVal);
  console.log(`The area is ${area}`)
} // endFUNC
calcArea(6)

//Exercise #5
//Create a function called celsiusToFahrenheit:
// - store a celsius temperature into a variable
// - convert it to fahrenheit and output "SOMETHING degrees Celsius is Something degrees Fahrenheit"
//Create a function called fahrenheitToCelsius:
// - Now store a fahrenheit temperature int a variable
// - Convert it to celsius and output "SOMETHING degrees Fahrenheit is SOMETHING degrees Celsius"

function cTof(celsiNum) {
	let cTransF = (celsiNum * 1.8) + 32;
  console.log(`${celsiNum} degrees Celsius is ${cTransF} degress Fahrenheit!`)
} // endFUNC
cTof(21)

function FToC(FahrenNum) {
	let FToC = (FahrenNum - 32) * 0.556;
  console.log(`${FahrenNum} degrees Fahrenheit is ${FToC} degress Celsius!`)
} // endFUNC
FToC(157)

/*
function cTof(celsiNum) {
  console.log(`${celsiNum} degrees Celsius is ${((celsiNum * 1.8) + 32)} degress Fahrenheit!`) // if one-line is preferable
} // endFUNC
cTof(21)
*/

//Exercise #6
//Write a function that takes 3 parameters and returns one number, which is
//the product of the first two numbers raised to the power of the third.
//Passing this function 1,2,3 should give you back the answer to (1 * 2)^3

function doMaths(num1, num2, num3) {
	let product = (Math.pow((num1*num2), num3))
  return product
} // endFUNC
console.log(doMaths(2,3,2));
