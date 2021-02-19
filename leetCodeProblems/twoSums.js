let twoSums = (nums, target) => {


    /** complex way of solving the problem: **/ 

    // if(target == null) {
    //     return 0
    // } 

    // iterate over array from 0 -> n
    // var nextEl = 1;
     var outputArray = [];
    // count = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     count ++;
    //     if(count == nums.length) {
    //         nextEl = 0;
    //         console.log(nums[nextEl]);
    //         if(nums[i]+ nums[nextEl] == target) {
    //             console.log(nums[i], ' + ', nums[nextEl], ' = ', target);
    //             outputArray.push(nextEl);
    //             outputArray.push(i);
    //             return outputArray
    //         }
    //     }
        
    //     if(nums[i]+ nums[nextEl] == target) {
    //             console.log(nums[i], ' + ', nums[nextEl], ' = ', target);
    //             outputArray.push(i);
    //             outputArray.push(nextEl);
    //             return outputArray
    //         }
       
    //         nextEl++;
    // }

    /** easy way to solve problem **/


    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] == target - nums[j]) {
                outputArray.push(i);
                outputArray.push(j);
                return outputArray
            }
        }
    }

}


console.log('indicies that equal sum ', twoSums([2,7,11,15], 9))