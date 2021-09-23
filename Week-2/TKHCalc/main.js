function input (button) {
    // text of button clicked with be displayed
    document.calc.display.value += button.value;
}

// C Button; clears data / reverts back to placeholder
function clearDis() {
    document.calc.display.value = "";
}

// introducing the eval() method.
// it evaluates JS strings and returns a mathematical equation

function compute() {
    document.calc.display.value = eval(document.calc.display.value);
}

// when each number will be sep'd by a comma;
// 
function average() {
    // create variable to keep track of group of numbers
    let sum = 0;
    // create list of numbers from values passed in calc
    listOfNums = document.calc.display.value.split(",");
    // cycle through array of inputs/#'s, and adds together
    for (let i=0; i < listOfNums.length; i++) {
        sum += parseInt(listOfNums[i])
    }
    // average sum and save to variable
    let avg = sum / listOfNums.length;
    // now display it
    document.calc.display.value = avg;



} // end of average function

