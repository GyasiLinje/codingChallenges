function sort(arr) {

    // We can work on the result array without changing the original array
    // Makes shallow copy on input array
    const resultArray = [...arr];
    console.log(resultArray);

    for(let outer = 0; outer< resultArray.length; outer++) {
     
     
       let outerEl = resultArray[outer];
       console.log('OUTER LOOP');
       console.log(outerEl);
        
      for(let inner = outer + 1; inner < resultArray.length; inner++){
       
        let innerEl = resultArray[inner];
        console.log('INNER LOOP');
        console.log('innerEl: ', innerEl);
        console.log('outerEl: ', outerEl);

        // [2,1] => [1,2]
            if(outerEl > innerEl) {
               resultArray[outer] = innerEl;
               resultArray[inner] = outerEl;

               outerEl = resultArray[outer];

               inner = resultArray[inner];

               console.log(resultArray);

            } 

            console.log('End of inner loop')
            console.log(resultArray)
        }
    }

    return resultArray;
}

const sortedArray = sort([5,10,-3,-10,1,100,99]);

console.log(sort(sortedArray))