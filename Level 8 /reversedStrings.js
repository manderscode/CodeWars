// Instrctions: Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    return (str === '') ? '' : solution(str.substr(1)) + str.charAt(0);
}
solution("hello");

// console.log (solution("hello"))

//     return str;
// }
// reverseString("dlrow");

// function reverseString(str) {