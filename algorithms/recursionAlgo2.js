// factorial function

function fib(number) {
    if (number === 1 || number === 2) {
        return 1;
    }
    return fib(number - 1) + fib(number - 2);
}


// Dynamic programming

console.log(fib(4))
console.log(fib(5))


let memo = {}


function fibDynamic(number, memo) {
    let result;
    if(memo[n]) {
        return memo[n];
    }
    if (number === 0 || number === 1) {
        result = 1;
    } else {
        result = fib(number - 1) + fib(number - 2);
    }
    memo[number] = result;
    return result;
}


console.log(fibDynamic(5, {}));
console.log(fibDynamic(6, {}));
