const ids = new Set();
// adds a value
ids.add('abc')

ids.add(1)

for(const el of ids) {
    console.log(el)
}


// get a value 
console.log(ids.has(1))


// delete a value
ids.delete('abc')
console.log(ids)