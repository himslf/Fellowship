
// 1. Create a function that takes numbers 1 - 10 and console logs them. Use a for loop.

function countUp() {
    for (startHere = 1; startHere <= 10; startHere++) {
      console.log(startHere);
    }// EndFor
  }// EndFunc
countUp();

// 2. Using a while loop, return an array that contains all odd numbers between 3 and 103

let i = 3;
let odds = [];

while(i <= 103) {
  odds.push(i)
  i+=2;
	} // EndWhile
  
console.log(odds)

// 3. arraySum(num) receives an array of numbers as an argument and returns the sum of all numbers,  for example: arraySum([1, 2, 3, 4, 5, 6]) => 21, use any loop.

let nUms = [1, 2, 3, 4, 5, 6];
let sum = 0;

function arraySum() {
for (i = 0; i < nUms.length; i++) {
	sum = sum + nUms[i];
  }
console.log(sum);
} // EndFunc
arraySum()

// 4. Use a loop to display the numbers 9 to 0 in descending order.

for (i = 9; i >= 0; i--) {
    console.log(i)
}

// 5. Write a function computing the factorial of n.

function facto(numero) {
	let total=numero;
	while (numero > 1) {
        numero--;
        total *= numero;
    }
    return total;
}
console.log(facto(4))

// 6. Write a function using a for loop that returns the sum of all numbers from 1 to n. 

function sumOfNums(numero) {
    let total = 0;
      for(i = 1; i <= numero; i++){
        total += i;
      }
      return total;
  }// EndFUNC
console.log(sumOfNums(4))

/* 7. Using any loop: Given a string, change every second letter to an uppercase ‘Z’. Assume there are no spaces.
let string = “donuts”
Expected output => dZnZtZ
*/


