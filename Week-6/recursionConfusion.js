// fucking recursion

// non-recursive version
function downCount (numero) {
    for (i = numero; i >= 0; i--) {
        if (numero === 0) {
            console.log('LIFTYOFFY!!')
        }
    }
}
console.log(downCount(4)) // undefined

// recursive version
function countDown (num) {
    if (num === 0) {
        console.log('liftOFF!');
    } else {
        console.log(num);
        countDown(num - 1) // the recursive part[?]
    }
}
countDown(7)


// log each letter of the string until string is empty
function stringRecur (aStr) {
    if(aStr.length === 0) {
        console.log('END OF STRING, BRO.')
    } else {
        let newStr = aStr.slice(0, aStr.length - 1)
        console.log(stringRecur(newStr));
    }
}
console.log(stringRecur('Pamelita')) // undefined


