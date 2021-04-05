let threeSumClosest = (myArray,target) => {
    let high = 2;
    let lo = 1
    if(myArray.length <=0) {
        return 0
    } else  if(myArray.length == 1) {
        return 1
    } else {
      for(let i = 0; i < myArray.length; i++) {
         let sum = myArray[i] + myArray[i+lo] + myArray[i + high];
        
         console.log(myArray[i], " ", myArray[i+1], " ", myArray[i +2])
         if(myArray[i + high] == undefined) {
             console.log("high undefined")
            high = 0
          //  let sum = myArray[i] + myArray[i+low] + myArray[i + high];
          console.log(myArray[i], " ", myArray[i+lo], " ", myArray[high])
            high += 1
         } else if(myArray[i + lo] == undefined) {
             lo == 0
           //  let sum = myArray[i] + myArray[i+low] + myArray[i + high];
           console.log(myArray[i], " ", myArray[lo], " ", myArray[high])
             lo+=1
             high+=1
         } else if(myArray[i] == undefined) {
             return sum
         }
      }
    }
}

console.log(threeSumClosest([-1,1,2,4], 1))