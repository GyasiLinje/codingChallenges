
//My solution completed in 35 minutes
const isPrime = n => {
    if(n == 1) {
        return true;
    }
    if (n >= 10) {
        if (n % 2 === 0 || n % 3 === 0 || n % 5 === 0 || n % 7 === 0 || n % 9 === 0) {
            return false;
        } else {
            for (let smallerNum = n - 1; smallerNum > 1; smallerNum--) {

                val = n / smallerNum
                //  console.log(val)
                // console.log(val%1 === 0 )
                if (val % 1 === 0) {
                    return false;
                } else {
                    return true;
                }
            }
        }
    } else if (n > 2 && n < 10) {
        if(n % 2 === 0) {
            return false;
        } else if(n == 3 || n == 5 || n == 7) {
            return true
        } else if(n % 3 === 0) {
            return false;
        }
  
    } 

}

// Academind solution blew me out of the water ( 0_o )lol
const isPrimeAcademind = n => {
    for(let i = 2; i < n; i++) {
        if(n % i === 0) { // 5 % 2 => 1
             return false;
        } else {
            return true;
        }
    } 
}

num = 1
if(num <=0) {
    return
}
//let x = isPrime(num)


let x = isPrimeAcademind(9)
if (x == true) {
    console.log('not prime')
} else {
    console.log('prime',)
}



