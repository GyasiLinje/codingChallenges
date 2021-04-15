// filter an array

function getOccurence(myArray, val) {
   return myArray.filter((v) => (v === val)).length
}

console.log(getOccurence([1,2,3,4,5,5,5,6], 5))