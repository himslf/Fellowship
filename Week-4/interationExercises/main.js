//Exercise #1
//Using map, write a function that takes an
// array of numbers and makes them strings

let nooms = [1, 2, 3, 4, 5];
function convert2Integer(anArray) {
    let arrayOfStrings = anArray.map(String);
    return arrayOfStrings;
}
console.log(convert2Integer(nooms))

//Exercise #2
//You must use forEach for this exercise
//Write a function that accepts an array and returns a new array
//with all the values in the array passed to the function doubled

function dubVal (arrayName) {
	let newArray = [];
  arrayName.forEach(function (eachElement) {
  	newArray.push(eachElement * 2);
  });
  return newArray;
}
console.log(dubVal([2,4,2,4]));

//Exercise #3
//Write a function called firstAndLast which accepts
//an array of strings and returns a new array with
//only the first and last character of each string
//Example: ['winning', 'tomato'] => ['wg', 'to']
//hint: forEach show be used here

let arrayOfWords = ['winning', 'tomato'];
function firstAndLast(anArray) {
  let finalArray = [];
  let newWord = anArray.map(w => (w.charAt(0) + w.charAt(w.length-1)));
  finalArray.push(newWord);
  return finalArray;
}
console.log(firstAndLast(arrayOfWords));

// using forEach():
let arrayOfWords = ['winning', 'tomato'];
function firstAndLast(anArray) {
	let aNewArray = [];
    // attach function to method:
    anArray.forEach(function (valz) {
  	if (typeof value === "string") {
          aNewArray.push(value[0] + value[value.length -1]);
    }
  })
  return aNewArray;
 } // EoFUNC.
 console.log(firstAndLast(['winning', 'tomato']));

//Bonus:
//Write a for loop that outputs this:
// 1 1 1 2 2 2 3 3 3 4 4 4

let numOut = '';
for (i = 1; i < 5; i++){
  for (j = 1; j < 4; j = j + 1){
    numOut += (i + " ");
  }
}
console.log(numOut);

