let lengthOfLongestSubstring = (str, subStringLength) => {

    let count = 0;
    let originalStrLength = str.length;
    var subString = [];
    if (str.length == 0) {
        return 0
    }

    let isCharRepeated = false;
    for (let i = 0; i < str.length; i++) {
        isCharRepeated = (isRepeatedHelper(str[i], subString, ls, subStringLength));
        if (isCharRepeated == true) {
            str = str.slice(subString.length, originalStrLength)
            return lengthOfLongestSubstring(str, subStringLength)
        }

    }
    let getLargestLength = subStringLength[0]
    return getLargestLength
}

let isRepeatedHelper = (ele, subString, ls, subStringLength) => {
    if (subString.length == 0) {
        subString.push(ele)
        return false
    } else {
        for (let i = 0; i < subString.length; i++) {
            if (ele == subString[i]) {
                return true
            }
        }

        subString.push(ele);
        console.log(subString)
        if (subString.length > ls) {
            ls = subString.length
            console.log("Longest length ", ls)
            subStringLength.pop()
            subStringLength.push(ls)
        }
        return false
    }

}


var subStringLength = []
var ls = 0

console.log(lengthOfLongestSubstring("b", subStringLength))