let str = "ABCDEFGHIJAAA"

// How to find num of occurences for a character
let occurences = str.match(/A/g);

// Find out if character is alphanumerical

for(let i = 0; i < str.length; i++) {
    let isNotChar = (/[a-zA-Z]/).test(str[i])
    console.log(isNotChar)
}

