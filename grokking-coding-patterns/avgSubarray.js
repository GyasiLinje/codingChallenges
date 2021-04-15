let find_averages_of_subarrays = (K, arr) => {
    const result = []
    for(let i = 0; i < arr.length - K +1; i++) {
        sum = 0.0;
        console.log( arr.length - K +1)
        for(let j = i; j < i +K; j++) {
            sum += arr[j]
        }
        result.push(sum / K);
    }

    return result;
}

// Sliding window approach

function optimal_find_averages_of_subarrays(K, arr) {
    // Declare empty array
    const result = [];
    let windowSum = 0.0;
    let windowStart = 0;

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        // slide the window, we don't need to slide if we've not hit required window size of k
        if(windowEnd >= K - 1) {
            result.push(windowSum / K) // calculate the average
            windowSum-= arr[windowStart]; // subtract elem going out 
            console.log("Subtract element going out " + windowSum)
            windowStart += 1 // slide the window ahead
        }
    }

    return result
}


optimal_find_averages_of_subarrays(5, [1,3,2,6,-1,4,1,8,2]);