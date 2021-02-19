const myMap = new Map();

myMap.set('averages', [1.53, 1.54])
myMap.set('lastResult', null);

console.log(myMap.averages)


const country = { name: 'USA', population: '82'}


myMap.set(country)

for (const el of myMap) {
   console.log(el)
}

