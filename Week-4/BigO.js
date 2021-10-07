
// the Big O – an optimizing concept/tool

// essentially answers: 'What is the big O of this algorithm?'

/*

the 'O' refers to the order of function; or length.
the 'n' represents the length of the array to be sorted.


it can be written as such:
    O(n) - great for small things, but not for large repetitive actions
    O(n²) – 
    O(!n) – 
    O(2^n) – (worst case)
    O(1) – (most ideal)
    O(√n) – 
    O(log₂(n)) – 
    O(n * log₂(n)) – 

the runtime increases at the same pace as the InputEvent;
1 item, 1 second
10 items, 10 seconds
100 items, 100 seconds

Big-O gives importance to performance and Storage; which is important cuz money.

O(1) is the most efficient, because it's constant.
    i.e.: 1 item takes 1 second

O(n) is a close efficient.
    i.e.: 1 item takes 1 second

O(n²) is a less efficient.
    i.e.: 1 item takes 1 second, 10 items take 100 seconds, 100 items, 10,000 second.

etc.

*/

const data = ['A', 'B', 'C'];
for (let i = 0; i < data.length; i++) {
    console.log(data[i])
}   // this is O(n) or O(3) because:
    // its has muitple(3) elements yet is simple in process


// looking at O(logn)
// it represents the runtime barely increasing, despite input exponentially increasing
// it'd look like: 1 item, 1 second ; 10 items, 2 seconds ; 100 items, 3 seconds.

// in math, log₂(8) would = 3
// for it asked 2 to the what popwer equals 8.
// 3 is the exponent, 2 is the base.

// O(logn) refers to an algorithm that cuts the 'problem' in half each time.