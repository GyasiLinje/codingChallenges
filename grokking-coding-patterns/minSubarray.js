function minSubarray(s, arr) {
    var windowSum = 0.0
    var windowStart = 0;
    var minLength = Infinity
    
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];

        while(windowSum >= s){
            minLength = Math.min(minLength, windowEnd - windowStart +1);
            console.log("Min length " + minLength + " WindowEnd " + windowEnd + " - " + windowStart)
            windowSum -= arr[windowStart];
            console.log('New window sum after subtracting ' + arr[windowStart] + " = " + windowSum)
            windowStart += 1;
        }
    }
    if(minLength == Infinity) {
        return 0;
    }
    return minLength;
}

minSubarray(7, [2, 1, 5, 2, 3, 2])