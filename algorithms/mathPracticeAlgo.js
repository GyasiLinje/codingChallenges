// Algo #1 figure out the smallest in number

let smallestInt = numArray => {
    let smallest = numArray[0];
    for(let i = 1; i < numArray.length; i++) {
        console.log("Smallest ", smallest, "Current num  ", numArray[i])
        if(smallest > numArray[i]) {
            smallest = numArray[i]
        }
    }

    return smallest
}

console.log(smallestInt([12,4,2,19,1,7]))


// Algo #2 figure out if a number is even
let isEven = n => {
    if(n <2) {
        return false
    }
    if(n %2 == 0) {
        return true
    } else {
        return false
    }
}

console.log(isEven(3))