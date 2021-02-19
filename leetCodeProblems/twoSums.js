let twoSums = (nums, target) => {

    // iterate over array from 0 -> n
    var nextEl = 1;
    var outputArray = []
    for (let i = 0; i < nums.length; i++) {
            console.log('first: ', nums[i]);
            console.log('second: ', nums[nextEl]);
            if(nums[i]+ nums[nextEl] == target) {
                console.log(nums[i], ' + ', nums[nextEl], ' = ', target);
                outputArray.push(i);
                outputArray.push(nextEl);
                return outputArray
            }
            nextEl++
    }

    // iterate over array from 1 -> n
}


console.log('indicies that equal sum ', twoSums([3, 3], 6))