function urlify(str) {
    if(str == null) return 0;
    let index = str.search(" ")
    if(index == -1) return str
    let newStringArray = str.split("");
    for(let i = 0; i < str.length; i++) {
        if(newStringArray[i] == " ") {
            if(newStringArray[i+1] != " ") {
                newStringArray[i] = "%20";
            } else if (newStringArray[i+1] == " ") {
                nextChar = i + 1
                newStringArray[i] = "%20";
                while(newStringArray[nextChar] == " ") {
                    console.log("here");
                    newStringArray[nextChar] = ""
                    nextChar += 1
                }
            }
        } 
    }
    let newString = newStringArray.join("");
    return newString 
}


urlify("John   Sm it  h")