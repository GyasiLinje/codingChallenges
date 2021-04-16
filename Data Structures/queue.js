let arr = [1,2,3,4,5,6,7,8,9]

var queue = []
var stack = []

for(let i = 0; i < arr.length; i++) {
    queue.push(arr[i])
}

console.log(queue)

// Create queue
while(stack.length > 0) {
    stack.push(queue.pop())
}

console.log(stack)