// find the current maximum

let findMaxSlidingWindow = function(arr, window_size) {
    var result = [];

    var max = arr[0];
    for(var i = 0; i < 5; i++) {
        console.log(arr[i] + " " + max)
            if(arr[i] > max) {
                console.log("here")
                max = arr[i]
            }
            window_size += 1 
    }

    
    //Write your code
    return max;
  };

  console.log(findMaxSlidingWindow([1,2,3,4,3,2,1,2,5]))

