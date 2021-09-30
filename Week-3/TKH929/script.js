//write a function that adds 'ing' to an array of verbs and returns them as a new array
//bonus: make it work with verbs that end in a vowel, example: dance -> dancing 
function addIng(arr){
  for (let i = 0; i < arr.length; i++) {
    arr[i] += "ing";
  }
  return arr;
}
console.log(addIng(["eat", "sleep", "read"]));
            
/*
write a function that takes in a string and turns it into pig latin example: cat = atcay 
if the word starts with a vowel, you should add 'yay' to the end. example: apple = appleyay
return the new pig latin string
*/
function pigLatin(str) {
  // Convert string to lowercase
  str = str.toLowerCase()
  // Initialize array of vowels
  const vowels = ["a", "e", "i", "o", "u"];
  // Initialize vowel index to 0
  let vowelIndex = 0;

  if (vowels.includes(str[0])) {
    // If first letter is a vowel
    return str + "way";
    } else {
      // If the first letter isn't a vowel i.e is a consonant
      for (let char of str) {
        // Loop through until the first vowel is found
        if (vowels.includes(char)) {
        // Store the index at which the first vowel exists
        vowelIndex = str.indexOf(char);
        break;
      }
    }
    // Compose final string
    return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
  }
}

console.log(pigLatin("asdonjerom"));
console.log(pigLatin("cat"));
console.log(pigLatin("apple"));

//write a function that counts the number of vowels in a string and return the number of vowels
//hint look up .includes() method 
const vowels = ["a", "e", "i", "o", "u"]
function countVowels(str) { 
  const count = str.match(/[aeiou]/gi).length;
  return count;
}
console.log(countVowels("banana"));
console.log(countVowels("automaticAnglerIOU"));