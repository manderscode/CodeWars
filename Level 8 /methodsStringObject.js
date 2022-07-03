//P: 2 parameters - the string and the separator
//R: returning a string
//E: splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
//P: declare a variable that's going to split - 
//then use the join method(separator)


function splitAndMerge(string, separator) {
    let stringNew = string.split(' ').map(x => x.split('').join(separator))
    
    console.log(stringNew.map(x => x.split('')))
    
    return stringNew.join(' ')
    return 
  }