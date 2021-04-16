// O(n^2) T.C

function maxOccuringChar(str) {
    console.log('here')
    var max = 0;
    var result = [];
    for (let i = 0; i < str.length; i++) {
        let occurences = numrOccurences(str[i], str)
        if (occurences > max) {
            max = occurences
            result.push(str[i])
        }
    }
    let resultLength = result.length - 1;
    return result[resultLength]
}

function numrOccurences(elem, str) {
    var count = 0;
    for (let i = 0; i < str.length; i++) {
        if (elem === str[i]) {
            count += 1;
        }
    }

    return count
}

// O(n) T.C
function findDuplicatesEfficiently(str) {
    var myMap = new Map()
    var max = 0;
    if(str == null) return 0;
    let result = []
    let occurences = 0;
    for(let i = 0; i < str.length; i++) {
        if(myMap.has(str[i])) {
            occurences = myMap.get(str[i])  
            occurences += 1;
            if(max < occurences) {
                max = occurences
            }
            result.push(str[i])
        } else {
            occurences = 1;
            if(max < occurences) {
                max = occurences
            }
            myMap.set(str[i], occurences)
        }
    }
    
   return max
  
}

console.log(findDuplicatesEfficiently("Java"))