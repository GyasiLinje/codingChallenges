const person = {
    name: 'Gyasi', age: 25,
    hobbies: ['basketball', 'coding', 'photography'], greet() {
        console.log("Hi I'm Gyasi")
    }
}

console.log(person.greet())

const employees = {
    id: 132781,
    name: 'Gyasi',
    age: 25
}

for(const el in employees) {
    console.log(el.id)
}