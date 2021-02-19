let linearSearch = (n, numbers) => {
    if (typeof (n === 'number' && n !== null)) {
        for (let i = 0; i < numbers.length; i++) {
            if (n == numbers[i]) {
                return true
            }
        }
    }


    return false
}


var numbersArray = [1, 3, -3, 5, 7]
var myNumber = 1;

console.log(linearSearch(myNumber, numbersArray));