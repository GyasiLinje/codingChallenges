// Solved iterabley in 25 minutes
let isPowerOfTwo = num => {
    count = 0;
   if(num == 0) {
       return 0;
   } else if(num %2 == 0) {
       // meat of work
      while(num > 1){
           num = num/2
           if(num > 1 && num%2 != 0) {
               console.log("here")
               return false
           } else {
               count++;
           } 
       } 
    }
    console.log(count)
   return true

}

// Recursive solution 
let isPowerOfTwoRecursive = num => {
    count = 0;
    if(num == 1) {
        return count
    } else {
        return count +   isPowerOfTwoRecursive(num/2)
    }
}


let num = 2048;

//console.log(isPowerOfTwo(num))

console.log(isPowerOfTwoRecursive(num))


