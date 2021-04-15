function doesOccur(str) {
    let myMap = new Map()

    for(let i = 0; i < str.length; i++) {
        let occurence = 0;
        if(myMap.has(str[i])){
            occurence = myMap.get(str[i]);
            occurence +=1
            myMap.set(str[i], occurence)
        } else {
            occurence += 1;
            myMap.set(str[i], occurence)
        }
    }

  return myMap
}

console.log(doesOccur(["hello", "abc", "gyasi", "pizza", "gyasi"]))