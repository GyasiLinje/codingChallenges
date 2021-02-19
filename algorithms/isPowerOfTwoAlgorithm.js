// Recursion
let isPowerOfTwo = num => {
    if(num == 2) {
        return true;
    }
    for(let i = 2; i < num; i ++)   {
        let val = (num/i);
        console.log(val)
        if(val % 2 === 0) {
            console.log('here')
            return true;
        } 
    }

    return false;
}


let num = 31;

console.log(isPowerOfTwo(num))


