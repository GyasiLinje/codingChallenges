function noRepeatString(str) {
    if(str == null) {
        return 0
    } 

    if(str.length == 1) {
        return 1
    }
    
        
    let windowStart = 0;
    maxLength = 0;
    charFrequency = { }


    for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];

        if(!(rightChar in charFrequency)) {
            charFrequency[rightChar] = 0;
        }
        charFrequency[rightChar] += 1;

        // console.log(charFrequency)
       // let hashLenght = 
      maxLength = Object.keys(charFrequency).length;

    }

 return maxLength;


}


noRepeatString("abccde")