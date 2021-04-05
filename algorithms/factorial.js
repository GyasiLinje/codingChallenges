// Calculate the factorial of a number
// fact(3); // 3 * 2 * 1 = 6
// fact(5); // 5 * 4 * 3 * 2 * 1 = 120

let fact = num => {
    if(num === 1) {
        return 1;
    }
  return num * fact(num-1)
}

console.log(fact(5))

// O(n) time complexity