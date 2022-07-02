function convert(time){
    //time.toTimeString() - this is the date object from the MDN and this method turns time into a string
    //then she split method turns the string into an array
    console.log(time.toTimeString())
    let newTime = time.toTimeString().split(' ').slice(0,1).join(' ')
    console.log(newTime)
    console.log(newTime[0])
    //we have to utilize the .toString method b/c we can't add a string and number b/c it's not the same data type so we have to turn the miliseconds to a string and then...
    let milliseconds = time.getMilliseconds().toString()


    //we utilize the while loop to set an ending condition and we set it to having the length of 3 
    // then we can concatenate the 0 that comes before 
    while (milliseconds.length < 3){
      milliseconds = '0' + milliseconds
    }
    return `${newTime[0]},${milliseconds}`
  }