/* Return the nth element of the Finonacci sequence


1 -> 1 
2 -> 1 + 2
3 -> 1 + 2 + 3 

*/
let fib = n => {
    const numbers = [1,1]
    for(let i = 2; i < n + 1; i++) {
          numbers.push(numbers[i-2] + numbers[i-1])
    } 

    return numbers[n]
}

console.log(fib(7));