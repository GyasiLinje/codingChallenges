let binarySearch = (num, numbers) => {
    let startIndex = numbers[0];
    
    let endIndex = numbers.length - 1;

    var mid = Math.floor(numbers.length / 2);


    console.log(numbers[mid]);
    if (num < numbers[mid]) {
        console.log(num, ' is less than mid: ', numbers[mid]);
        for (var i = 0; i < mid; i++) {
            if (num == numbers[i]) {
                return true;
            }
        }
    } else if (num > numbers[mid]) {
        console.log(num, ' is greater than mid: ', numbers[mid]);
        for (let i = mid; i < numbers.length; i++) {
            if (num === numbers[i]) {
                return true;
            }
        }
    } 
    
    return false;
    
}

var numbers = [1, 10, 20, 50, 100,180];
var n = 80;

console.log(binarySearch(n, numbers));