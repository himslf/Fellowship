// working with ARRAYS

//INDICES

// instead of:
let car1 = "BMW";
let car2 = "CX5";
let car3 = "P1";

// do:
let cars = ["BMW", "CX5", "P1"];
console.log("original list", cars);

// changing a value by index:
// which removes CX5, and replaces
cars[1] = "Land Rover";
console.log("replaceing", cars[1]);


// .length()
let lengthOfCars = cars.length(); // returns 3
console.log("Length of Array:", cars.length());

// .push() adds element(s) at END of array
cars.push("Hyundai");
console.log("after PUSH:", cars);

// .pop() removes LAST element of array
cars.pop();
console.log("after POP:", cars);
// to remove a certain element, 

// .shift() remove the FIRST element of array and returns it.
let shiftCARS = cars.shift();
console.log("after SHIFT:", shiftCARS)

// .unshift() adds element(s) to FRONT of array
cars.unshift("Paddy Waggon", "Ducati");
console.log("after UNSHIFT:", cars)


let namez = ["BEEMER", "BENZO", "P-EZ", "ALPHA-RO"];
console.log("plain/original:", namez);

// .splice() ADDS elements to specified index, while removing another
// first number is the index which is being replaced 
let newNamez = mamez.splice(1, 2, "ALPHA-RO")


// .sort() alphabetizes an array


// .join() separates each index with something-of-choice
let girls = ["Mary", "Jill", "joan"];
console.log("I love", girls.join(" and i love "));

// .split() creates an array by separating a string into substrings
let bString = "Medium well steak is preferred";
console.log("Plain String:", bString);
let sString = bString.split(" "); // returns another array, not prints it
console.log("Broken Up:", sString)


// p r a c t i c e

let contacts = ["Steve Smith", "Matt Davis", "Amy Linn"];

// create father variable, add Matt Davis to it
let father = contacts[1];
// check it
console.log(father);

// update first element in array to "Mark Williams"
contacts[0] = "Mark Williams";
// check it
console.log(contacts);

// use pop() to remove the last element from array
contacts.pop()
//check it
console.log(contacts);

// use push() to add Michelle Johnson to end of array
contacts.push("Michelle Johnson");
// check it
console.log(contacts);

// assign value of length to variable
let numberOfContacts = contacts.length;
// check it
console.log(numberOfContacts);



// to add to 16th Slide in ARRAYS PowerPoint

function sortFruits(){
    let fruits = ["apple", "orange", "kiwi"]

    let newSmoothie = document.querySelector("input[type=button]");
    newSmoothie.addEventListener("click", function(){
			fruits.push(prompt("Add a Fruit!"));
			// grab element(list), and add to it using .join
			document.getElementById("smoothie").innerHTML = fruits.join(" with ");
			})
}
