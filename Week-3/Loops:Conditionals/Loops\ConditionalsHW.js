
// A:

let lunchArray = ["Burger", "Salad", "Lasagna", "Sushi", "Meatloaf"];
let biggerW = "";

for (let i = 0; i < lunchArray.length; i++) {
    if (biggerW.length < lunchArray[i].length) {
        biggerW = lunchArray[i];
        } // end IF
} // End FOR loop
console.log("Length of Longest Word: " + biggerW.length + " characters.");
console.log("Longest Word/String: " + biggerW);

// WHAT IF the array looked like this:
let luRay = [ "Burger  Salad  Lasagna Sushi  Meatloaf" ];

function findLongestWord(luRay) {
    let splitStringRay = luRay[0].split(' ');
    //initialize a variable to store the longest word
    let longWord = "";
  
    for(i = 0; i < splitStringRay.length; i++){
        if(splitStringRay[i].length > longWord.length){
            longWord = splitStringRay[i];
         } // EndoIF
     } // EndoFOR
   
     return longWord;
 } // EoFunc
console.log(findLongestWord(luRay))



// B:

let aList = [1, 2, 3, 4, 5, 6, 7]
let newList = []

for(i = 0; i < aList.length; i++) {
    if (aList[i] % 2 != 0) {
        newList.push(aList[i])
    }
}
console.log(newList)



// C:
function factorialiZe(anyNumber) {
    let fd = anyNumber;
    if (anyNumber === 0 || anyNumber === 1) {
        return 1;
    } // no Else, no real reason
    while (anyNumber > 1) {
        anyNumber--;
        fd *= anyNumber;
    }
    return fd;
  } // EoFunc
console.log(factorialiZe(7));
  


// D:

let mpg = 120;
if(mpg <= 10){
    console.log("Gas-Goozler!")
    } else if (mpg > 10 && mpg < 17) {
		console.log("Planet Still Weeps Upon Thy News; And So, One's Wallet.")
	} else if (mpg > 16 && mpg < 21) {
		console.log("It's palpable.")
    } else if (mpg > 20 && mpg < 30) {
	    console.log("Atmosphere smiles at your decision!")
    } else if (mpg >= 30 && mpg <= 35) {
	    console.log("Not many gas stops will be taken!")
    } else if (mpg > 35 && mpg != 120) {
	    console.log("The fish of the sea smile at your conservation!")
    } else if (mpg == 120) {
	    console.log("If you're using the Tom Ogle fuel system, props.")
    }