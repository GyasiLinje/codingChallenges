function removeDuplicates(str) {
    var myMap = new Map()
    var count = 0;
    if(str == null) return 0;
    var removedDuplicatesStr = ""

    for(let i = 0; i < str.length; i++) {
        if(myMap.has(str[i])) {
            count += 1            
        } else {
            count = 1;
            myMap.set(str[i], count)
            removedDuplicatesStr = removedDuplicatesStr.concat(str[i])
        }
    }

return removedDuplicatesStr
    
}

console.log(removeDuplicates("Jav"))