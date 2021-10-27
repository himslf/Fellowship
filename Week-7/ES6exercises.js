//Exercise #1
// Define two arrays, evens and odds filled with even 
// and odd numbers
// Using the spread operator, make a new
// array with numbers that contains all of the evens and odds

const evenList = [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24 ]
const oddList = [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25 ]

const alluvem = [...evenList, ...oddList]
console.log(alluvem) // prints an array with both sets of numbers.
// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25]

// half irrelevant, but...
let sortedNum = alluvem.sort()
console.log(sortedNum) // does NOT return all numbers in order.
// [1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2, 20, 21, 22, 23, 24, 25, 3, 4, 5, 6, 7, 8, 9]



//Exercise #2
// Define an object favoriteFooods that has keys representing three of 
// your favorite foods and the values should be the restaurant where
// they are from
// Make another object and do the same thing but ask your 
// imaginary friend what their favorite foods are. 
// Use the spread operator to build a final allFoods with the 
// items from the two objects you just built

const favoriteFoods = {
    'Salmon Alfredo' : "Maggianos",
    'Skirt-Steak & Potatos' : "AZTECA",
    'Chicken Sandwich' : "Martinez Grocery"
};

let fakeFriend = {
    'Naan Bread' : "Hut Heat",
    'Crab & Octopus Legs' : "Corner In Hell",
    'Chimichurry Sandwich' : "Random BX Truck"
};

let allFoods = {
    ...favoriteFoods,           // was thinking too hard here
    ...fakeFriend
};
console.log(allFoods);




// Exercise #3
// Define your favorite movie character in an object
// with three keys: name, age, and hometown
// Use destructuring to extract all three keys into variables
// log all three variables
// Use the spread operator to extract two of the keys but not the third
// store and log this new set of variables
// Now we are going to give this person a pet
// Use destructuring to do the following
// 1) add a pet object to your person
// 2) define three variables (age, breed, name) outside of the object
// 3) add those variables to your pet
// log the most important thing about it: the pet's name 

const badMotherF = {
    "nombre" : 'Jules Winnfield',
    "age" : 33,
    "hometown" : 'Inglewood, California'
};

const {nombre, age, hometown} = badMotherF;

console.log(badMotherF)

console.log('-----------XXX---------')
console.log(nombre);
console.log(age);
console.log(hometown);
console.log('-----------OOO---------')

const {nombre, age : twoDetails} = badMotherF;

console.log(samAge)


console.log('-----------WWW---------')


