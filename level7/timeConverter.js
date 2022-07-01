// Instructions: 

//P: object
//R: is a string including the milliseconds with 3 decimals
//E: new Date(2016, 2, 8, 16, 42, 59)
//Should return: 
// "16:42:59,000"
//P:
//setting variables to represent the hours, minutes, and milliseconds
//return via template literal

function convert(time){
    // hours = 2 -> 0.02 -> "0.02" -> ["0", "02"] -> "02"
    const hours = (time.getHours() / 100).toFixed(2).split(".")[1]
    const minutes = (time.getMinutes() / 100).toFixed(2).split(".")[1]
    const seconds = (time.getSeconds() / 100).toFixed(2).split(".")[1]
    // milliseconds = 9 -> 0.009 -> "0.009" -> ["0", "009"] -> "009"
    const milliseconds = (time.getMilliseconds() / 1000).toFixed(3).split(".")[1]
    
    return `${hours}:${minutes}:${seconds},${milliseconds}`
  }

