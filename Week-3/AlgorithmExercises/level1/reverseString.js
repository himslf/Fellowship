/*
    Given a string, returns a new string that is the same as the
    original string with the order of its characters reversed.
    You're not allowed to use String.prototype.reverse().
    Returns the new string.
 */

function reverseString(aString) {
  let returnedString = "";
  for (let i = aString.length - 1; i >= 0; i--) {
    returnedString += aString[i];
  }
  return returnedString;
} // end of function

describe('reverseString', function() {
  const assert = require("chai").assert;

  it('should work for empty string', function() {
    assert.equal(reverseString(""), "");
  });

  it('should work for single-character strings', function() {
    assert.equal(reverseString("a"), "a");
    assert.equal(reverseString(" "), " ");
    assert.equal(reverseString("*"), "*");
  });

  it('should work on non-trivial strings', function() {
    assert.equal(reverseString("cba"), "abc");
    assert.equal(reverseString("foobar"), "raboof");
    assert.equal(reverseString("otatop"), "potato");
    assert.equal(reverseString("foof"), "foof");
  });
});