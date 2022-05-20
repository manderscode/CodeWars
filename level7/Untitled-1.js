// Instructions: Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
//You are given a number and expecting a number back
let convertNumber = n.toString(); 
  
//You want to apply the split method to turn the string into an ordered list of substrings so then you can put it into an array and it returns an array
let newArray = convertNumber.split('');

// You want the highest number, so sort the number in a descending way
let sortArray = newArray.sort();

//Apply the reverse mthod to the array
let reverseArray = sortArray.reverse(); 

let joinArray = sortArray.join('');
// You want to join it back to a number
let backNumber = Number(joinArray);

return backNumber; 
} 
