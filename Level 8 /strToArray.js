// Instructions: Write a function to split a string and convert it into an array of words.

function stringToArray(string){
    const words = string.split(" ")
    console.log(words)
    return words
    }
    
    //Parameters: we're given a string 
    // Returning: an array of words
    // Example: "Travora is my Black Queen" => ["Travora", "is", "my", "Black" "Queen"]
    // Psuedo Code: 1. split the string by each word and space
    //2. convert it into an array - Array.from or toString (?)
    