const ids = new Set();

ids.add('abc')

ids.add(1)

for(const el of ids) {
    console.log(el)
}

// get a value 
console.log(ids.has(1))