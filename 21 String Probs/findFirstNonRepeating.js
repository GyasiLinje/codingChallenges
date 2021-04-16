function firstNonRepeating(str) {
    var myMap = new Map()
    if(str == null) return 0;
    let result = []
    let occurences = 0;
    for(let i = 0; i < str.length; i++) {
        if(myMap.has(str[i])) {
            occurences = myMap.get(str[i])     
            occurences += 1;
        } else {
         return str[i]
        }
    }

    return 0
  
}

console.log(firstNonRepeating("Java"))