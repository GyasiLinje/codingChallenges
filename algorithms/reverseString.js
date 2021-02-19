function reverseString1(str) {
    var strArr = str.split("");
    var reverseArr = strArr.reverse();


    // turn array to string
    var reversedString = reverseArr.join("");

    // or

    return str.split('').reverse().join('');

}


function reverseString2(str) {
    var reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        console.log(str[i]);
        reverseStr += str[i];
       
    }
    console.log(str);
    console.log(reverseStr);

    if(reverseStr == str) {
        console.log('palindrome')
    } else {
        console.log('not palindrome')
    }

}

reverseString2("ahiha");