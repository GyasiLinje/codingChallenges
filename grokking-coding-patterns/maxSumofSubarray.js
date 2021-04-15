// My solution using sliding window

function max_subarray(arr, K) {
    windowSum = 0;
    let maxSum = 0;
    windowStart = 0;
    resultsArray = [];
    maxSum = 0
    for(windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        // Add sum to elements
        windowSum += arr[windowEnd];

        if(windowEnd >= K - 1) {
            console.log(maxSum)
            maxSum = Math.max(maxSum, windowSum);
            console.log(maxSum)
            windowSum -= arr[windowStart];
            // Add new element to window
            windowStart += 1
        }
    }

    return maxSum
}

// Educative algorithm brute force
function max_subarray_of_size_k(k, arr) {
    let maxSum = 0;
    let windowSum = 0;

    for(let i = 0; i < arr.length - k + 1; i++) {
        for(let j = i; j < i + k; j++) {
            windowSum += arr[j]
        }

        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum
}

console.log(max_subarray([2, 3, 4, 1, 5], 2));