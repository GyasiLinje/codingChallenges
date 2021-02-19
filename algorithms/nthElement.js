const nthElement = (el, myArray) => {

    var nthEl = 0;
    for(let i = 0; i < myArray.length; i++) {
        if(el === myArray[i]) {
            return i; 
        } 
    }

    return null
}

console.log(nthElement(1,[0,2,3,4,1,5]))