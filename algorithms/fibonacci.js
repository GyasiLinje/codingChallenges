/* Return the nth element of the Finonacci sequence


1 -> 1 
2 -> 1 + 2
3 -> 1 + 2 + 3 

*/
let fib = n => {
    const numbers = [1, 1]
    for (let i = 2; i < n + 1; i++) {
        numbers.push(numbers[i - 2] + numbers[i - 1])
    }

    return numbers[n]
}

// Dynamic programming solution


let dynamicFib = (n, memo) => {
    let result;
    // Won't have to do as many nested function calls
    if(memo[n]) {
        return memo[n]
    }
    if (n === 0 || n === 1) {
        result = 1
    } else {
        result = dynamicFib(n - 1, memo) + dynamicFib(n - 2, memo)
    }

    memo[n] = result;
    return result
}
console.log(fib(5, {}));
console.log(dynamicFib(6, {}));