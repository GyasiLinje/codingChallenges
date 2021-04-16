// Pseudocode
//  check if null

function removeDuplicateMultipleStrings(str1,str2) {
    if(str1 == null || str2 == null) return 0

    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    str1 = str1.split(" ")
    str2 = str2.split(" ")
    str1 = str1.join("")
    str2 = str2.join("")
    var newStr = ""


    var myMap = new Map()
    for(let i = 0; i < str1.length; i++) {
        myMap.set(i,str1[i])
    }

    for(let i = 0; i < str2.length; i ++) {
        if(myMap.has(str2[i])) {
         myMap.delete(str2[i])
          newStr = newStr.concat(str2[i])
        }
    }
    for(let i = 0; i < myMap.size; i++) {
      let keys = myMap.get(i)
      console.log(keys) 
    }
   console.log(myMap)
}


removeDuplicateMultipleStrings("India is great", "in")