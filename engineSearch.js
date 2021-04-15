function engineSearch(str) {
    // Map var

    var myMap = new Map()
    // clean the string

    str = str.split(" ");



  //  console.log(str)

    for(let i = 0; i < str.length; i++) {
        str[i] = cleanString(str[i]);
      //  console.log(str[i])
        let occurence = 0;
        if(myMap.has(str[i])) {
            occurence = myMap.get(str[i])
            occurence += 1
            myMap.set(str[i], occurence)
        } else {
            occurence += 1;
            myMap.set(str[i], occurence)
        }
    }

    var sortedMap = new Map([...myMap.entries()].sort())
return sortedMap
}

function cleanString(str) {
    for(let i = 0; i < str.length; i++) {
        let isAlpaNumeric = (/[a-zA-z]/).test(str[i]);
        if(!isAlpaNumeric) {
            str = str.replace(str[i], "")
        } 
        str = str.toLowerCase()
    }

    return str

}

console.log(engineSearch("Practice makes perfect. you'll only get Perfect by practice. just practice!"))