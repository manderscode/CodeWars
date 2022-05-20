// //Instructions: Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    let positiveNums = 0;
    let negativeNums = 0;
      //if the input isn't null or empty
    if (input === null || input.length === 0) {
      return [];
    } else {
     //utilize the forEach method to iterate through each element in the array
    //if the if number > 0, then increment by 1, or if it's less than 0, use the += to add all of the negative numbers
      input.forEach((num) => num > 0 ? positiveNums++ : negativeNums += num);
    }
    return [positiveNums , negativeNums]; //returns this as an array
}
