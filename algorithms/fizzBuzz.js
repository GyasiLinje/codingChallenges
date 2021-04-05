let fizzBuzz = n => {
    strArray = []
    for(let i = 1; i <= n; i++) {
        if(i%3 == 0 && i%5 != 0)
        {
            strArray.push("Fizz")
        } else if(i%5 == 0 && i%3 !=0) {
            strArray.push("Buzz")
        } else if(i %3 == 0 && i%5 == 0) {
            strArray.push("FizzBuzz")
        } else {
            strArray.push(i.toString())
        }
    }
   return strArray
}

console.log(fizzBuzz(15))