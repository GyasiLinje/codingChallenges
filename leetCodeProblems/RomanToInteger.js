function romanToInteger(val) {

    let count = 0

    for(let i = 0; i < val.length; i++) {
       
        if(val[i] == "I") {
            if(val[i+1] != "I") {
                if(val[i+1] == "V" || val[i+1] == "X") {
                    count -= 2
                }
            }
            count += 1
        } else if(val[i] == "V") {
            count += 5
        } else if(val[i]== "X") {
            if(val[i+1] == "L" || val[i+1] == "C") {
                count -= 20;
            } 
            count+= 10
        } else if(val[i] == "L") {
            count += 50
        } else if(val[i] == "C") {
            if(val[i+1] == "D" || val[i+1] == "M"){
                count -= 200
            }
            count += 100
        } else if(val[i] == "D") {
            count += 500
        } else if(val[i] == "M") {
            count += 1000
        }
    }

    return count
}

s =  "MCMXCIV"

console.log(romanToInteger(s))