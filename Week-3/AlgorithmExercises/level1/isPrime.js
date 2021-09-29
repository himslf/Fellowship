/**
 * Determines whether the given number is a prime number, i.e. it is not divisible by any integers other than 1 and itself.
 * Returns true or false.
 */
 function isPrime(numero) {
  if (numero === 1) {
   return `${numero} is NOT a prime number!`;
   } else if (numero === 2) {
     return `${numero} IS a prime number!`
   } else{
     for (let i = 2; i < numero; i++){ 
       if (numero % i === 0) {
         return `${numero} is NOT a prime number!`;
       }
     }
     return `${numero} IS a prime number!`;
    }
 }


console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(157));

describe('isPrime', function() {
  const assert = require("chai").assert;

  it('should handle 1', function() {
    assert.isFalse(isPrime(1));
  });

  it('should handle 2', function() {
    assert.isTrue(isPrime(2));
  });

  it('should detect primes', function() {
    assert.isTrue(isPrime(3));
    assert.isTrue(isPrime(5));
    assert.isTrue(isPrime(7));
    assert.isTrue(isPrime(23));
  });

  it('should not have false positives', function() {
    assert.isFalse(isPrime(4));
    assert.isFalse(isPrime(72));
    assert.isFalse(isPrime(99));
    assert.isFalse(isPrime(21));
    assert.isFalse(isPrime(10));
  });
});