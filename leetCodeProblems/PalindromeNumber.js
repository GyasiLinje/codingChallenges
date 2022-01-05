function palindromNumber(val) {
    let valAsString = x.toString()
    let reverseString = ""

    for(let j = valAsString.length-1; j > -1; j--){
        reverseString += valAsString[j]
    }


   
    for (let i = 0; i < valAsString.length; i++) {
        if (valAsString[i] != reverseString[i]) {
            return false;
        }
    }

    return true
}
let x = 121

if(!palindromNumber(x)) console.log("not a plalindrome!")
else console.log("palindrome!")

