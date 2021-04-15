const resultData = new Map();

resultData.set('average', 1.53);
resultData.set('lastResult', null)


const Country = {name: 'USA', population: 100}

resultData.set(Country, 1.00)


console.log(resultData.get('average'))
resultData.delete("average")
console.log(resultData)