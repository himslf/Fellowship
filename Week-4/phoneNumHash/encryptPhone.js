/**
 * @function encryptPhoneNumber should take a phone number and hash it for security and privacy purposes.
 * @param number will always be a string formatted as such '111-223-1123'. Your function should return the first 6 digits as * and only the last 4 shown. Ex:
 * ' 111-223-1123 ' should be ' ***-***-1123 '
 */


module.exports = encryptPhoneNumber;

function encryptPhoneNumber(num) {
    let hideMe = [];
      for(let i = 0; i < num.length; i++){
      if(i < num.length-4){
        hideMe.push("*");
      }else{
        hideMe.push(num[i]);
      }
    }
    return hideMe.join("");
  } // endFUNC.
  
  console.log(encryptPhoneNumber('12345678'))