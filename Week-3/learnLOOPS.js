
// L O O P S

// initialization
let i = 0; // i < 5; i++
// condition
while(i < 5) { 
    // incrementation
    i++; // or i--
}


let food = ["pizza", "steak", "naaan", "corndogs", "tacos"]
for (i=0; i < food.length; i+=2) {
    console.log(food[i]);
}


// MAP (is a) function
// .map() performs a certain function to each element
// of an array and returns a NEW array.
// it does NOT change orginal array.


let numberz = [1,2,3,4,5]

numberz.map(
    (num) => {return console.log(num)}
)
// one-line version:
let numX2 = numberz.map(numberz => numberzz * 2);
// so essentially...
anArray.map(elementINarray => (doSmthngWithElementInArray))
// doSmthngWithElementInArray could be a name of a function

// practice
// plain array
let nooms = [1,2,3,4,5];
// taking each element and squaring it
let sqNooms = nooms.map(nooms => nooms * nooms);
// print to confirm
console.log(sqNooms);
// creat a function to determine divisibility by 4
function isDivisibleBy4(nooms) {
  let boolArr = nooms.map(i => (i % 4 == 0));
  return boolArr;
}
// show & prove
console.log(isDivisibleBy4([1, 4, 8, 9, 33]));

