

//              ES6 and beyond, Spread syntax, and destructuring

// ------------------------------------------------------------------------------------

//  started with a LAB:
/*

Given a string s, find the first non-repeating character in it
and return its index. If it does not exist, return -1.

Example:
Input: s = "leetcode"
Output: 0

*/

/**
 * @param {string} s
 * @return {number}
 */


 var firstUniqChar = function(s) {
    for(i=0; i<s.length; i++)
        if(s.indexOf(s[i])===s.lastIndexOf(s[i])) return i
    return -1
};


// OR:


var firstUniqChar = function(s) {
    let map = {}
	
	// creating a map of all the chars in the string
    for(let i of s){
        map[i] ? map[i]++ : map[i] = 1
    }
    
    // checking the first letter in the map with value 1
    for(let i in map) {
        if(map[i] === 1) {
            return s.indexOf(i);
        }    
    }
	
    // if there are no unique characters then return -1 
    return -1;
};


////////////////////////////////////////////////////////////////////////////////////////////////
//                        ES5 , ES6, AND BEYOND
////////////////////////////////////////////////////////////////////////////////////////////////

//      E S 5
function functionName () {
}

//      E S 6
const functionNamE = () => {
}

//      E S ?
const error = (someStatus) => {
    console.error(someStatus)
}
// or:
const eRROR = someStatuS => console.error(someStatuS)

const eRRor = (aStatus, aMSG) => console.log(aStatus, aMSG)


//                                      *************

// new arrays and objects
//  S P R E A D syntax // SPREAD operator

// take:
const evens = [2,4,6,8]
let odds = [1,3,5,7]

// and say we want to add 8 and 10 to evens.
// beyond ES6, we do it like so:
let moreEvens = [...evens,8,10];    // this pushes/adds 8 and 10 to the end of 'evens'.
// 'evens' is not changed/mutated

// to add both arrays into a new array:

const allNums = [...odds, ...evens, 8, 9, 10];
console.log(allNums); // prints >> [1, 3, 5, 7, 2, 4, 6, 8, 8, 9, 10]

//              * * * with OBJECTS * * *

const people = {
    'Jay-Z' : {shirt: 'goldfish'},
    'Drake' : {shirt: 'DavidHasselhoff'},
    'JamMaster' : {shirt: 'buttonDown'}
};


const otherPeople = {
    'Jason' : {shirt: 'coffee brown'},
    'MiMi' : {shirt : 'wonder woman'}
};

const allPeople = {
    ...people,
    ...otherPeople
};

console.log(allPeople);
/* ^ ^ ^ returns a lone object:
{
    Drake: {
      shirt: "DavidHasselhoff"
    },
    JamMaster: {
      shirt: "buttonDown"
    },
    Jason: {
      shirt: "coffee brown"
    },
    Jay-Z: {
      shirt: "goldfish"
    },
    MiMi: {
      shirt: "wonder woman"
    }
  }
*/


//                                      *************

const letters = {
    a : 1,
    b : 2,
    c : 3
};

const otherLetters = {
    d : 4,
    e : 5,
    a: 10
}

const allLetters = {
    ...letters,
    ...otherLetters
}

console.log(allLetters); // prints: { a: 10, b: 2, c: 3, d: 4, e: 5 }

// note: the 'a' attributed to 10 is the one 'chosen'
// i.o.w: the latter-accessed value is the one that prints.



// one could also change the value by:
otherLetters.a = 99;    // changing a value
// then,
console.log(otherLetters);
// prints >> { a: 99, d: 4, e: 5 }

// &

allLetters.a = 777;     // changing a value
// then,
console.log(allLetters);
// prints >> { a: 777, b: 2, c: 3, d: 4, e: 5 }



// FYI: a nested object can be changed. if inside another object, it's inherently being changed.

//                                      * * * * * * * * * * * * *

//  ES6 introduced a thing where you can EXTRACT one or more KEY:VALUE pairs
//                  . . . called    D E S T U R C T U R I N G

const persOn = {
    firstName : 'Aubrey',
    lastName : 'Graham',
    city : 'Toronto'
};

// what if we wanted to extract the first name and last name?
// we woud...

const {firstName, lastName} = persOn;   // this ACCESSELIZES firstName & lastName as variables with values
// ^ ^ called DESTRUCTURING

console.log(firstName);     // >> Aubrey
console.log(lastName);      // >> Graham
console.log(persOn.city)    // >> Toronto


const {city, ...other} = persOn;        // this TRANSFORMS firstName & lastName as variables with values
// ^ ^ called DESTRUCTURING

console.log(city);
console.log(other);

//  the SPREAD operator in this context will grab everything not explicitly extracted into a variable.

// another look:

const car = {
    brand : 'Mazda',
    model : 'CX5',
    color : 'Black'
};

// say we wanna extract the BRAND .

const {brand} = car;    // 'brand' is now a variable
// ^ ^ called DESTRUCTURING

console.log(brand); // >> Mazda

const {brand, ...someShitAnything} = car; // 'brand' and 'someShitAnything' are accessible variables
// ^ ^ called DESTRUCTURING

console.log(someShitAnything); // we are grabbing anything that is NOT explicity written
// ^ ^ prints >> { color: "Black", model: "CX5" }

// PRINTING car will still print the original object as an object


// this can even be accomplished WITH FUNCTIONS.

const getName = () => {
    return {
        firsT : 'Bernie',
        lasT : 'Mac'
    }
}

const {firsT, lasT} = getName()
// ^ ^ called DESTRUCTURING

console.log(firsT); // >> Bernie
console.log(lasT);  // >> Mac


//    * * * * * * * * * * * * * * *  E S 8  * * * * * * * * * * * * * * * * * * 

// ES8 introduced 'padStart' and 'padEnd'

// aString.padStart(theTargetedLength, thePadString)
'EFG'.padStart(7, 'ABCD') // >> ABCDEFG

'56789'.padStart(7, '1234')



// * * * * * Object.entires returns an aeray of enumerable property K:V pairs of the object

Object.entries('Jason');
// ^ returns >> [["0", "J"], ["1", "a"], ["2", "s"], ["3", "o"], ["4", "n"]]


// and here...

const pizzzza ={
    a : 'pepperoni',
    b : 'pineapple'
};

for (const [key, value] of Object.entries(pizzzza)) {
	console.log(`${key}: ${value}`); 
}
/* ^ ^ ^ prints >> a: pepperoni
                   b: pineapple
*/

// while,

console.log(Object.entries(pizzzza))
//  prints an array >> [["a", "pepperoni"], ["b", "pineapple"]]
//  an array is printed because Object.entries is printed explicitly.









