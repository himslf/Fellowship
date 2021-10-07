//Exercise #1
//Using filter create one function that only returns the 
// even numbers of an array
// Now write a function that returns only the odds

const listOfNum = [22, 33, 44, 55, 66, 77]; // unnecessary if included in console.log?
const onlyEvens = listOfNum.filter(function (eLement) {
  return eLement % 2 === 0;
})
console.log(onlyEvens);
// ODDS:
const onlyOdds = listOfNum.filter(function (eLement) {
  return eLement % 2 !== 0;
})
console.log(onlyOdds);

// i found it interesting an Array can be explicitly inputted:

const onlyEEvens = [1,2,3,4,5].filter(function (eLLement) {
  return eLLement % 2 == 0;
})
console.log(onlyEEvens);

//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6

const randoz = [72, 40, 3, 48, 54];
const divBy6 = randoz.filter(function (insideArray) {
  return insideArray % 6 == 0;
})
console.log(divBy6);

//Exercise #3
// using reduce, add up all numbers in an array
// ex: [10,12,20,50] => 92

const someNums = [10,12,20,50];
const sUm = someNums.reduce(
	(accumulatOR, firstVal)  => accumulatOR + firstVal
 );
console.log(sUm)

//Exercise #4
//Using Reduce, multiply all numbers in a given array
//ex: multiply([1, 2, 3, 4, 5]) => 120

const someNooms = [10,2,2,5];
const sUUm = someNooms.reduce(
	(changingAccumulator, nowValue)  => changingAccumulator * nowValue
 );
console.log(sUUm)

//Exercise #5
//using reduce, power up all numbers in a given array
// ex:  squareNums([3, 2, 3]) => 729, since (3^2) = 9 and then (9 ^ 3) = 729

function sqNum (anArray) {
	let newNew = anArray.reduce((preVal, curVal) => {
  	return preVal ** curVal;
  }, )
  return newNew;
} // eFUNC
console.log(sqNum([2,2,1,2]))

//Exercise #6
//using the .filter(), filter out the Full Stack residents 

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];     
     
let leClass = users.filter((pErSon) => pErSon.role === 'Full Stack Resident');
console.log(leClass)

// **********************************************************
//Bonus
//Using Reduce
//add up all the ages in the array of objects
// the ages in the array of objects below should equate to 78

let raY = [{name: 'Josh', age: 24}, {name: 'Meghan', age: 34}, {name: 'Samantha', age: 20}]

let sumAge = (raY) => raY.reduce((aValue, anotherValue) => aValue + anotherValue.age, 0);

console.log(sumAge(raY));


