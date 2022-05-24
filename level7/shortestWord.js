// Instructions: Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let wordsArr = s.split(' ');
     let shortest = Infinity; // mentor told me about how you can call you "Infinity"
     
     for (let i = 0; i < wordsArr.length; i++){ 
     let wordLength = wordsArr[i].length;
     if (wordLength < shortest) { 
     shortest = wordLength;
       }
     }
       return shortest;
   }
     
   //P: takes in a string 
   // R: returns the length of the shortest word(s)
   // Example below: "the" and "who" are the shortest words in the phrase = 3 is returned
   // turn the string into an array and applying the split method
   // declare a variable for the shortest word
   // utilise the for loop to loop through each element
   // return the shortest word(s) - remember there can be multiple short words!