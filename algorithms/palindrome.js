let plaindrome = x => {
    if(x < 0) {
        return false
    }
    let initialNum = x.toString();
    let tempArray = initialNum.split("")
    let palindrome = ""
    for(let i = tempArray.length-1; i >=0; i--) {
        palindrome += tempArray[i]
    }
  //  console.log(newTempArray);
 
    //palindrome.replace(",", "")
    console.log("Palindrome: ", palindrome)
    if(initialNum == palindrome) {
        console.log('true')
    } else {
        console.log('false')
    }
}

plaindrome(132);