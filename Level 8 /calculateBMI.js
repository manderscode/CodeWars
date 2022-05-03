// //Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


// function bmi(weight, height) {
//   let weight = a;
//   let height = b;
//   let bmi = (a/b*b)
  
//   if (bmi <= 18.5){
//     return 'Underweight'
//   }else if(bmi <= 25.0){
//     return 'Normal'
//   }else if (bmi <=30.0) { 
//     return 'Overweight'
//   }else; 
//   return 'Obese';
// }

// code with Marcos
function bmi(weight, height) {
    let a = weight
    let b = height
    let bmi = (a/b**2)
    console.log (bmi)
    
    if (bmi <= 18.5){
      return 'Underweight'
    }else if(bmi <= 25.0){
      return 'Normal' // return is like a stop sign and returning that value
    }else if (bmi <=30.0) { 
      return 'Overweight'
    }else  
   {return 'Obese'} // else is its own function and you have to input the curly braces b/c that's a condition as well
  } // continue to say "else if" instead of "or" @ Mandy - personal notes from Marcos