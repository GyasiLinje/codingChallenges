
//My solution completed in 35 minutes the first time studying for google interview (not sure what date sometime before 1.6.21)
// My solutions completed in 5 minutes the second time studying for google interview 4.3.21
// My more sophisticated version which is what you see below took an extra 2 minutes to figure so total of about 8 minutes
const isPrime = n => {
    if (n == 1) {
        return true;
    }
    for (let i = n - 1; i > 1; i--) {
        if (n % i == 0) {
            console.log(i)
            return false
        }
    }

    return true
}


num = 11
if (num <= 0) {
    return
}
let x = isPrime(num)
console.log(x)


// let x = isPrimeAcademind(9)
// if (x == true) {
//     console.log('not prime')
// } else {
//     console.log('prime',)
// }



