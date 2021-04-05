let longestPrefix = strs => {
   var count = 1;
   var prefixArray = []
   for(let i = 0; i <= strs[0].length; i++) {
      var prefix = strs[i].slice(0, count)
      if(checkStringPrefix(strs, prefix, count)) {
        prefixArray.push(prefix)
        count ++
      } else {
       //   console.log(prefixArray)
          return prefixArray
      }
   
   }

   console.log(prefixArray)

}

let checkStringPrefix = (strs,prefix, count) => {
    for(var i = 0; i < strs.length; i++) {
        if(prefix != strs[i].slice(0,count)) {
            return false
        } 
    }
    return true
}


console.log(longestPrefix(["floow", "flower", "floght"]));