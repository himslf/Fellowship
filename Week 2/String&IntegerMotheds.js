// WEEK 2; DAY 1

// STRING FUNCTIONS/METHODS. INTEGER FUNCTIONS/METHODS.


let setOfNumberz = 7251991;					// plain integer
console.log(typeof setOfNumberz);			// prints the TYPE of variable

let konverted = String(setOfNumberz);		// converts variable to String form
console.log(typeof konverted);				// prints TYPE of variable

console.log(setOfNumberz === konverted);	// returns boolean value

// Ex:

typeof "John"                 // Returns "string" 
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"

// GLOBAL Javascript Methods
Number()	    // Returns a number, converted from its argument.
parseFloat()	// Parses its argument and returns a floating point number
parseInt()	    // Parses its argument and returns an integer

// NUMBER METHOD
Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN 
Number("John");        // returns NaN

// PARSEINT METHOD
parseInt("-10");        // returns -10
parseInt("-10.33");     // returns -10
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN

// PARSEFLOAT METHOD
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN

// MORE String Methods:

charAt(position)	// Returns the character at the specified position (in Number).
charCodeAt(position)	// Returns a number indicating the Unicode value of the character at the given position (in Number).
concat([string,,])	// Joins specified string literal values (specify multiple strings separated by comma) and returns a new string.
indexOf(SearchString, Position)	// Returns the index of first occurrence of specified String starting from specified number index. Returns -1 if not found.
lastIndexOf(SearchString, Position)	// Returns the last occurrence index of specified SearchString, starting from specified position. Returns -1 if not found.
localeCompare(string,position)	// Compares two strings in the current locale.
match(RegExp)	// Search a string for a match using specified regular expression. Returns a matching array.
replace(searchValue, replaceValue)	// Search specified string value and replace with specified replace Value string and return new string. Regular expression can also be used as searchValue.
search(RegExp)	// Search for a match based on specified regular expression.
slice(startNumber, endNumber)	// Extracts a section of a string based on specified starting and ending index and returns a new string.
split(separatorString, limitNumber)	// Splits a String into an array of strings by separating the string into substrings based on specified separator. Regular expression can also be used as separator.
substr(start, length)	// Returns the characters in a string from specified starting position through the specified number of characters (length).
substring(start, end)	// Returns the characters in a string between start and end indexes.
toLocaleLowerCase()	// Converts a string to lower case according to current locale.
toLocaleUpperCase()	// Converts a sting to upper case according to current locale.
toLowerCase()	// Returns lower case string value.
toString()	// Returns the value of String object.
toUpperCase()	// Returns upper case string value.
valueOf()   // Returns the primitive value of the specified string object.