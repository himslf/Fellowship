
// F U N C T I O N S

// example of Function DECLARATIONS:
function gReet(name) {
    console.log(`Hello ${name}`);
}
// 'name' is the ARGUMENT; of which is within the PARAMETER.
gReet('Jerome'); // prints Hello Jerome



// RETURN can also be used/substituted:
function sayHi(nombre) {
    return (`Hello ${nombre}`)
}
console.log(sayHi('Jerome')); // prints Hello Jerome

// writing it SHORTER (an Arrow Function):
//const greet =

// DECLARATIONS vs EXPRESSIONS
// F U N C T I O N  E X P R E S S I O N \\ aka ARROW FUNCTION:
let saySomething = (lastName) => {
    console.log("Hi " + lastName);
}


// comparison operator '==' check for VALUE likeness: 3 == 7 returns false
// '===' checks for VALUE and TYPE likeness: 3 = "3" returns false