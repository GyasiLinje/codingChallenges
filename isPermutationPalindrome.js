function  permutationsPalindrome(str) {
    if(str==null) return 0
  
    str = str.toLowerCase();
    str = str.replace(" ", "");
    console.log(str)
    var count = 0;
    for(let i = 0; i < str.length; i++)
    {
      count = numOccurences(str[i], str);
      if(count % 2 !== 0)
      {
        console.log(count)
        if(count > 1)
        {
          return false
        }
      }
      
    }
    return true
  
}

function numOccurences(elem, str) {
    var count = 0;
     for(let i = 0; i < str.length; i++) {
         if(elem === str[i]) {
             count += 1;
         }
     }

     return count;
}

console.log(permutationsPalindrome("Tact Coa"))