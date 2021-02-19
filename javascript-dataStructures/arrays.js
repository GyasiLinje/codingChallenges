const nums = [1,2,3,4,5,]

for(const item of nums) {
    // console.log(item)
}
 nums.unshift(0)

//finding elements can be performance intensive
let val = nums.findIndex(i => i === 5)

//console.log(val)


// val = nums.indexOf(0);
//console.log(nums)


// var newArraySplice = nums.splice(2,3)
// console.log('splice: ', newArraySplice);
// var newArraySlice = nums.slice(2,4)
// console.log(newArraySlice)


console.log(nums.filter(function(value) {
    return value > 2
}));

console.log(nums.map(function(value) {
    return value * 2
}))