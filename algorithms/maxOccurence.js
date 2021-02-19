// let scores = [100, 90, 85, 90, 60, 85, 100, 90, 55, 75, 60];
const myMap = new Map();

myMap.set('averages', [100, 90, 85, 90, 60, 85, 100, 90, 55, 75, 60]);

let scores = myMap.get('averages');

console.log(scores);
const countOccurences = (arr) => {
    var maxCount = 0;
    var newOccurence = 0;
    for (var i = 0; i < scores.length; i++) {
        var returnedOccurence = returnOccurences(scores, scores[i]);
        if (returnedOccurence > maxCount) {
            maxCount = returnedOccurence;
            newOccurence = scores[i];
        } else {
            maxCount = maxCount;
        }

    }

    return maxCount;

}


const returnOccurences = function (arr, val) {
    return arr.reduce((numberOfOccurences, elem) => {
        if (val === elem) {
            return numberOfOccurences += 1
        } else {
            return numberOfOccurences
        }
    }, 0);
};


console.log(countOccurences(scores));
