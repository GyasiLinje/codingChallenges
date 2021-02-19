
var myArr = [1,2,3,4,5,6,7,8];
var myTempArr = [...myArr];
console.log(myArr);
console.log(myTempArr);
for(let i = 0; i < myArr.length; i++) {
    for(let j = 0; j < myTempArr.length; j++) {
        console.log(myArr[i],myTempArr[j]);
    }

}