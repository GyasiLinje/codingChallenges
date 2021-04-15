function cleanString(str) {
    for(let i = 0; i < str.length; i++) {
        let isCharacterLetter =  (/[a-zA-Z]/).test(str[i])
        if(!isCharacterLetter) {
            str = str.replace(str[i], "")
        }
    }

    console.log(str)
}

cleanString("hello!")