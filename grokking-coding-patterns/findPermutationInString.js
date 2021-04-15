function find_permutation(str,pattern) {

    if(str.length == 0) return 0

    if(str.length >=2) {
        let patternLength = pattern.length;

        let windowStart = 1;
        let strPattern = ""
        pattern = pattern.split("")
        pattern = pattern.sort()
        pattern = pattern.join("")

        let permutaionMap = { }
        for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
            strPattern = str.slice(0, patternLength);
            strPattern = strPattern.split("");
            strPattern = strPattern.sort()
            strPattern = strPattern.join("")

            if(strPattern == pattern) {
                return true
            }
            nextStrPattern = str.slice(windowStart, patternLength+1);
            nextStrPatternLength = nextStrPattern.length - 1;
            while(nextStrPattern != pattern || nextStrPattern.length < pattern.length) {
                nextStrPattern = nextStrPattern.split("")
                nextStrPattern = nextStrPattern.sort()
                nextStrPattern = nextStrPattern.join("")
             //   console.log("Next str pattern + " + nextStrPattern + ' pattern' + pattern)
                windowStart+=1
                patternLength+=1
                nextStrPattern  = str.slice(windowStart, patternLength);       
                console.log(nextStrPattern)    
            }
            return true
        }
    }

    return false

}


find_permutation("oidbcaf", "abc")