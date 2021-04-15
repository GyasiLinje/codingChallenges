let bubbleSort = myArray => {
    for (var i = 0; i < myArray.length - 1; i++) {
        for (let j = 0; j < myArray.length - i - 1; j++) {
            if (myArray[j] > myArray[j + 1]) {
                var temp = myArray[j];
                myArray[j] = myArray[j+ 1];
                myArray[j + 1] = temp
                console.log(myArray)
            }
        }
    }

}

// Optimal version
// check for swap
// if no swap happens
// end algorithm (return)

let optimalBubbleSort = myArray => {
    count = 0;
    for (var i = 0; i < myArray.length - 1; i++) {
        for (let j = 0; j < myArray.length - i - 1; j++) {
            if (myArray[j] > myArray[j + 1]) {
                var temp = myArray[j];
                myArray[j] = myArray[j+ 1];
                myArray[j + 1] = temp
                console.log(myArray)
            } else {
                count += 1;
                if(count == myArray.length) {
                    return myArray;
                }
            }
           // console.log(count)
        }
    }

}


console.log(optimalBubbleSort("ACB"))