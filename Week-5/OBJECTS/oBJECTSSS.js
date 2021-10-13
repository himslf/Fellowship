// ---------------------------------------------------------------------------------
//								O B J E C T S 
// ---------------------------------------------------------------------------------
/*
Syntax General Looks As Such:

let obj = {
	name1: value1,
	name2: value2
};
*/

// --------------------------------------- BASICS --------------------------------------

// an Object is a list of KEY:VALUE pairs

// below is an OBJECT CONSTRUCTOR
// it CREATES an onject WRAPPER for the given value.

const anObject = new Object();

// another way of creating an OBJECT with literal syntax:
// (aka OBJECT INITIALIZER)

const anotherObject = {};

// but what about incorporating functions?
// it's called a CONSTRUCTOR FUNCTION.
// its using a function to construct an object.

const someClassroom = function (name, numStudents) {	// init function
	this.name = name;	// saving
	this.numStudents = numStudents;
}
const TKH = new someClassroom('2021Cohort', 24)

// the "THIS" keyword must be used when dealing with OBJECTS
// so let's try this again...

const favFilms = function (name, yearReleased) {
	this.name = name;
	this.yearReleased = yearReleased;
}
// now to create a new key value pair via a new variable:
const HP = new favFilms('Prisoner of Askaban', 2007)

// using object.CREATE
// it'll take in an object, and create another[?]

const perSon = {
	type : 'Human',
	displayType: function() {
		console.log(this.type)
	} 
}
// ^ and so with the above, we can do the below:
const perSon77 = Object.create(perSon)
perSon77.displayType(); // returns the 'displayType' which is 'Human'

// to change a value of a KV-pair:
perSon77.type = 'SuperHuman';
// ^ this changes the 'type' for 'perSon77'

// ----------------------------------PRACTICE------------------------------------------

const classRoom = new Object(); // created empty object

classRoom.name = 'TKHIF2021';	// add 'name' property
classRoom.campus = 'Remote';	// add 'campus' property

console.log(classRoom); // prints: { name: 'TKHIF2021', campus: 'Remote'}

// ----------------------------------BRACKET NOTATION------------------------------------------
// used to create, add, and read properties.
classRoom['name'] = 'peeples';
classRoom['campus'] = 'DaBronx';
console.log(classRoom); // prints: { name: 'peeples', campus: 'DaBronx'}

// we can even save a key:value pair to a variable:
const loCation = 'campus'; // saving an entire key:value pair to a variable
console.log(classRoom[loCation]); // prints: DaBronx

// ----------------------------------DELETING PROPERTIES------------------------------------------
// CREATE an Object with 3 K:V pairs, and save to variable
const classrooM = {name: 'TKH21', campus: 'BX', size: 25};
// to delete a K:V pair, do:
delete classrooM.campus;
// then prove:
console.log(classrooM); // prints: {name: 'TKH21', size: 25}


// ---------------------------------- MO' PRACTICE------------------------------------------

// u
const myCar = {
	make: 'Mazda',
	model: 'CX-5',
	year: 2020,
};

const showProperties = function(oBj, literalObjName) {
	for (let kEy in oBj) {
		console.log(`${literalObjName}.${kEy} = ${oBj[kEy]}`)
	} 
}
showProperties(myCar, 'Juice Car')
/* prints:
Juice Car.make = Mazda
Juice Car.model = CX-5
Juice Car.year = 2020
*/


// ---------------------------------- COMPARING OBJECTS ------------------------------------------

const stuz = { name: 'Jerome'};
const stuz2 = { name : 'Jerome'};

console.log(stuz === stuz2); // prints: false
console.log(stuz === stuz); // prints: true

// they differ in conditional-value because they're in DIFFERENT objects.
// when objects are created separately, they are distinct and essentially DIFFERENT.
// even if given the same properties.
// they are only strictly equal if they both point to the same object in memory.