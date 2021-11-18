
// a simple function:
function sayHello () {
    return "Hello!"
}

sayHello(); // prints nothing; returns in bg
console.log(sayHello()); // prints >> Hello!
console.log(`returns: ${sayHello()}`); // prints >> returns: Hello!


console.log("- - - - - - - - - - - - - - - - - - - - -")


// if we take the same function by add 'async',
async function sayBye () {
    return "Bye-Bye!"
}

console.log(sayBye()); // prints >> Promise { 'Bye-Bye!' }
console.log(`returns: ${sayBye()}`); // prints >> returns: [object Promise]





// ASYNC Functions are initially declared with 'async',
// and the 'await' keyword follows within the function.

function printAfter2Seconds () {
    return
}