
/* The map() method creates a new array populated with the results of calling 
a provided function on every element in the calling array.
 */

// SIMPLE MAPPING 
let arrayX = [1, 2, 3, 4];
let map1 = arrayX.map(x => x);
console.log(map1); // the newly constructed array.
// expected output: Array [1, 2, 3, 4]


// CONVERTING int TO string
let nooms = [1, 2, 3, 4, 5];
function convert2Integer(anArray) {
    let arrayOfStrings = anArray.map(String);
    return arrayOfStrings;
}
console.log(convert2Integer(nooms))



//  forEACH() does NOT return a NEW array.
// it instead modifies the exisiting array.

// sime forEACH()
let array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));

// decreasingly simple forEACH()
let num = [2, 4, 6, 8, 10];
function dubblin(aRRay) {
  aRRay.forEach(element => console.log(element*2));
  return aRRay;
}
dubblin(num)

//Write a function that accepts an array and returns a new array
//with all the values in the array passed to the function doubled
// 'eachElement' is a placeholder; can be anything

function dubVal (arrayName) {
	let newArray = [];
  arrayName.forEach(function (eachElement) {
  	newArray.push(eachElement * 2);
  });
  return newArray;
}
console.log(dubVal([2,4,2,4]));

