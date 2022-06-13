Instructions: Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let reverseArray = []
    for (let i = n; i > 0; i--){ 
      reverseArray.push(i)
      
    }
    return reverseArray;
  };
  
  //deeply equal: === 
  // equal: ==
  // assign: =
  
  //P: numbers 
  //R: return an array of numbers in an array
  // E: Example : n=5 --> [5,4,3,2,1]
  // P: declare a variable and set it to an empty array b/c we we want to return an array
  // use a for loop to iterate through the array
  // set the initializor to n b/c we are not sure what "n" is
  // our condition is that i has to be greater 0 
  // incrementor counter has to be -- b/c we are returning numbers and the numbers before it
  // use the push method to push the number into the array
  