// Instructions: The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

// Examples (in JavaScript):

// hamming("I like turtles","I like turkeys")  //returns 3
// hamming("Hello World","Hello World")  //returns 0
// You can assume that the two input strings are of equal length.

function hamming(a,b) {
	// Implement me!
  
//P: we're given 2 strings of equal length
// R: calculate and return the hamming distance 
// E: E.g hammingDistance('rover', 'river') // should return 1 - b/c i and o are different and that is the 1 difference between the 2 words 
//P: loop through each letter of each string and compare it to each other
// frequency pattern: going over a sequence of data and checking for a particular condition
//return 1 if not equal

let diffCount = 0
    
for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
      diffCount += 1
      }
}  
      return diffCount
}
