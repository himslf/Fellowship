
// LeetCode to start the day...

/*
Given an integer array nums sorted in non-decreasing order,
return an array of the squares of each number sorted in non-decreasing order.
*/


let sortedSquares = function(A) {
    let result = [];
    let l = 0;
    let r = A.length - 1;
    let p = r;

    while (l <= r) {
        if (A[l] ** 2 > A[r] ** 2) {
            result[p--] = A[l++] ** 2;
        } else {
            result[p--] = A[r--] ** 2;
        }
    }
    
    return result;
};

// *    *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
// *    *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
// *    *   *   *   *   *   *   *   A N D  T H E N ...  *   *   *   *   *   *   *   *
// *    *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
// *    *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *








