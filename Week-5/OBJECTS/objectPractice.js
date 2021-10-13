// Exercise #1
// Create an object to hold information on your favorite recipe.
// It should have properties for *title* (a string), *servings*(a number)
// and *ingredients*(an array of strings)
// On separate lines (one console.log statement for each), log the 
// recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

const favReceipe = {
  title: 'Pizza',
  servings: 8,
  ingredients: ['dough', 'cheese', 'sauce']
}
console.log(favReceipe);
/* returns: {
  ingredients: ["dough", "cheese", "sauce"],
  servings: 8,
  title: "Pizza"
}
*/


//Exercise #2
// Create an array of objects, where each object describes
// a book and has properties for the *title*(a string), *author*(a string)
// and *alreadyRead* (a boolean indicating if you read it yet)
// Iterate through the array of objects of books. For each book, log the book title and book
// author like so: "1984 by George Orwell"
// Now use an if/else statement to change the output depending on whether you read it
// or not. If you read it, log a string like "You already read "1984" by George Orwell"
// and vice versa
 const someBooks = [{
   title: 'The Bible',
   author: 'God, himself.',
   alreadyRead: false
 },
 {
  title: 'Cat in The Hat',
  author: 'Dr. Suess',
  alreadyRead: true
},
{
  title: 'Twilight',
  author: 'Stephanie Meyer',
  alreadyRead: true
}];

for (let obj in someBooks) {
  if (someBooks[obj].alreadyRead == true) {
    console.log(`You already read '${someBooks[obj].title}' by ${someBooks[obj].author}.`)
  } else {
    console.log(`You have not read '${someBooks[obj].title}' by ${someBooks[obj].author}.`)
  }
}

//Exercise #3
//Create your object representing your favorite movie, like so
// const shawshank = {
//   title: 'Shawshank Redemption',
//   director: 'Frank Darabont',
//   actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
//   releaseYear: 1994, 
//   duration: 142
// }
// After you have crreated your movie object, print the title 
// of your movie using dot notation
// Print the director's name
// Print the release year
// Maybe your favorite came with an extended cut, including deleted scenes. 
// Write a statement that increases your movie object's duration by 30 minutes. 

const favMovie = {
  title: 'Pulp Fiction',
  director: 'Tarintino',
  actors: ['Samuel Jackson', 'Bruce Willis', 'Uma Thurman', 'Ving Rhames'],
  releaseYear: 1994,
  duration: 154
};
console.log(favMovie.title)
console.log(favMovie.director)
console.log(favMovie.releaseYear)

favMovie.duration += 30;
console.log(favMovie.duration)

//Exercise #4 
//using the array provided below, 
// How do you check if an object is an array or not? 
// You are checking if arrayList is an array, assuming it were an object before testing it
// That it is not an object
let arrayList = [1, 2, 3];

const arrayOrNah = Array.isArray(arrayList);
console.log(arrayOrNah);



//Exercise #5
// Write a function countCharacters that, when given a string as an argument,
// returns an object containing counts of the ocurrences of each character in 
// the string
// function countCharacters(){
// 
//  }
// countCharacters("hello"); => {"h": 1, "e": 1, "l": 2, "o": 1}

function countCharacters (aString) {
  let occurenceCount = {};
  for (w = 0; w < aString.length; w++) {
    let origin = aString.charAt(w);
    if (occurenceCount[origin]) {
      occurenceCount[origin]++; // add to occurence # if orginal number repeats
    } else {
      occurenceCount[origin] = 1; // if no alike character exist, leave count at 1
    }
  }
console.log(occurenceCount);
} // endFUNC
countCharacters("Lasagna")


//Exercise #6
// Write a function that accepts two objects
// as arguments and 
// *extends* all of the key/value pairs of the second one to the first one
//function extend(object1, object2) {
// }
// extend({a: 1, c: 3}, {b: 2, c: 4}) => {a: 1, b:2, c:4}

object1 = {
  a: 1,
  b: 2,
  c: 3
};

object2 = {
  c: 4,
  d: 5,
  e: 6
};

let newObject = Object.assign(object1, object2);
console.log(newObject);

// had trouble here, and sought help.
// will practice.