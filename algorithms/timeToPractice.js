// first algorithm: take an array of numbers as input and return the minimum value in the array

// 1. Create a function called NumArray
let findMax = numArray => {
    let max = numArray[0];
    for (let i = 0; i < numArray.length; i++) {
        if (max < numArray[i]) {
            console.log(numArray[i], ' > ', max);
            max = numArray[i];
        }
    }
    return max;
}

// T.C => O(n)
let numbers = [1, 2, 3, 4, 5]

console.log(findMax(numbers))

// second algorithm: take a number as input and true if it is an even number and false if it is an odd number

let isEven = num => {
    if(num == 0) {
        return 
    }
    if(num %2 == 0) {
        return true;
    } else {
        return false;
    }
}

let num = 0;

console.log(isEven(num))

// T.C => O(1)