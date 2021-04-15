// 6! = 6 * 5 * 4 * 3 * 2 * 1

let factorial = num => {
    console.log("Computing factortial of " + num)
    if(num < 1) {
        return 0;
    } else if(num == 1) {
        return num
    } else {
        return num * factorial(num-1)
    }
}

console.log(factorial(5))