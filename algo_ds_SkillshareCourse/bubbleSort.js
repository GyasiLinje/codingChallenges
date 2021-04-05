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


bubbleSort([2, 1, 10, 50, 42, 13, 3])