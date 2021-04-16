function findDuplicates(str) {
    var myMap = new Map()
    if(str == null) return 0;
    let result = []
    let occurences = 0;
    for(let i = 0; i < str.length; i++) {
       // console.log(str[i])
        if(myMap.has(str[i])) {
            occurences = myMap.get(str[i])
            
            occurences += 1;
            result.push(str[i])
        } else {
            occurences +=1
            myMap.set(str[i], occurences)
            console.log(myMap)
        }
    }

    console.log(result)
  
}

findDuplicates("c++")