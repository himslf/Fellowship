
// .filter() practice

const catAge = [2,2,3,8,6,1];
let newCat = catAge.filter(function (age) {
	return age < 3;
})
console.log(catAge)
console.log(newCat)

const numbers = [1, -1, 2, 3];
let sum = 0;

let add1 = (nuum) => {
	return nuum +1;
}
console.log(add1(4))



//using 'FOR'

for (let n of numbers)
	sum += n;
console.log(sum)

// but can be done with .reduce()

numbers.reduce((accumulatOR, currentValue) => {
	return accumulatOR + currentValue;
}, 0);
console.log("again: " + sum)
// OR:
const sUm = numbers.reduce(
	(accumulatOR, currentValue)  => accumulatOR + currentValue
 );
 console.log(sUm)


// C H A I N I N G
// attaching functions to eachother

// let aVariable = anArray.map().filter()