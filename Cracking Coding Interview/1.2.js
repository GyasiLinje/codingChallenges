function isPermutationOfEachother(str1, str2) {
    console.log("Here")
    if (str1 == null || str2 == null) {
        return false
    }

    if (str1.length != str2.length) {
        return false
    }

    // Sort both arrays 
    let sortedStr1 = sortArray(str1);
    let sortedStr2 = sortArray(str2);
    console.log(sortedStr1 + " " + sortedStr2);

    for (let i = 0; i < sortedStr1.length; i++) {
        if (sortedStr1[i] != sortedStr2[i]) {
            return false
        }
    }

    return true

}

let sortArray = myArray => {
    sortedArray = []
   for(var i = 0; i < myArray.length; i++) {
       sortedArray.push(myArray[i])
   }

   sortedArray = sortedArray.sort();
   return sortedArray
   //console.log(sortedArray)

}


console.log(isPermutationOfEachother("ABC", "CEA"));