let fruitsIntoBasket = (fruits) => {
    if(fruits.length == 0) {
        return 0;
    } else if(fruits.length == 1) {
        return 1;
    } else {
        // Main portion of code

        windowStart = 0;
        rightChar = windowStart + 2;
        leftChar = windowStart;
        let differnce = 0;
        count = 0;
        result = [];

        for(let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {

            if(fruits[windowEnd] == fruits[rightChar]) {
          
                 fruits[windowEnd] == fruits[rightChar];
                 result.push(windowEnd)
              
            }
 
        }

        return result.length+1;

    } 
}




console.log(fruitsIntoBasket(['A', 'B', 'C', 'B', 'B', 'C']))