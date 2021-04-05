let grades = [
    [12,13,32,43,42,23],
    [32,12,43,13,42,23],
    [43,12,43,12,45,12]
];

// for loop for multidemensional array
for(let i = 0; i < grades.length; i++) {
    // go through each element
    for(let j = 0; j < grades[i].length; j++) {
  //      console.log(grades[i][j])
    }
   // console.log("~~~~~~~")
}

grades.forEach(function(row) {
   row.forEach(function(col) {
       //console.log(col)
   });
 //  console.log("~~~~~~")
})


let activities = [
    [ 'Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7],
]



// add element to end of array
activities.push(['Study', 2])

for(let i = 0; i < activities.length; i++) {
    for(let j = 0; j < activities[i].length; j++) {
        console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
    }
}