// 20 string methods

var stringOne = "freeCodeCamp is the best place to learn"

var stringTwo = "ferontend and backend development"

var stringThree = "ABBCAABC"

// charAt()
console.log(stringOne.charAt(1))

// charCodeAt
console.log(stringOne.charCodeAt(1))

if(stringOne.charCodeAt(1) > stringTwo.charCodeAt(1)) {
    console.log("String 1 At 1 is bigger")
}

// concat()

console.log(stringOne.concat(stringTwo))


// fromCharCode ()

console.log(String.fromCharCode(114))

// includes
console.log(stringTwo.includes("end"))

// lastindex of

console.log(stringTwo.lastIndexOf("end"))

// Match -> returns an array of the element we're looking for and the length
console.log(stringThree.match(/A/g))
let numOccurences = stringThree.match(/A/g)
console.log(numOccurences.length)
let myMap = new Map()

myMap.set("A", numOccurences)

// repeat
console.log(stringOne.repeat(3))
 
// search() -> returns the starting index for the element
console.log("Search " + stringTwo.search("end"))

// slice()
console.log(stringTwo.slice(2,4))

// split
console.log(stringTwo.split(" "))

//startsWith()
console.log(stringOne.startsWith("free"))

//substr()
// The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.
//

console.log(stringOne.substr(1,2))

// toLowerCase
console.log(stringOne.toLowerCase())

// toUpperCase 
console.log(stringOne.toUpperCase())


// trim()
// Removes white spaces from both sides of a string
var stringFour = "           Subsreibe now!      "

console.log(stringFour.trim())


