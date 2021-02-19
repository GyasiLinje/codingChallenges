// Calculate the factorial of a number
// fact(3); // 3 * 2 * 1 = 6
// fact(5); // 5 * 4 * 3 * 2 * 1 = 120

let fact = num => {
    var prevFactorial = num - 1;
    for(let i = 1; i < num-1; i++) {
       prevFactorial = prevFactorial * i;
       console.log(i, ', ', prevFactorial);
    }

    return prevFactorial * num;

}

console.log(fact(10))