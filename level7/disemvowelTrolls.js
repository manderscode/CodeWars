function disemvowel(str) {
    let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'] //declare a variable set to vowels
    let arr = str.split('')
    let newArr = []
    for (let i = 0; i < arr.length; i++) { //for loop with our conditionals to l
      if (!vowel.includes(arr[i])) {  //this method determines whether an array includes a certain value among its entries
        newArr.push(arr[i])
      }
    }
    return newArr.join('')
  }
  