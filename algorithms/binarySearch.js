let binarySearch = (val, numbers) => {
    let median = Math.floor(numbers.length / 2);
    if (val > numbers[median]) {
        console.log("Here")
        let greaterList = numbers.slice(median, numbers.length);
        console.log(greaterList);
        // Compare val to greater half of list
        while (numbers.length > 1) {
            let greaterMedian = Math.floor(greaterList.length / 2);
            console.log(greaterMedian)
            console.log(greaterList[greaterMedian])
            if (val < greaterList[greaterMedian]) {
                greaterList = greaterList.slice(0, greaterMedian)
                console.log(greaterList)
            } else if (val > greaterList[median]) {
                greaterList = greaterList.slice(median, greaterList.length);
                console.log(greaterList)
            } else if (val == greaterList[greaterMedian]) {
                console.log("found")
            }
        }
    }
    console.log("Not found");
    return "Not found"
}

var numbers = [1, 10, 20, 50, 100, 180];
var n = 80;

console.log(binarySearch(n, numbers));