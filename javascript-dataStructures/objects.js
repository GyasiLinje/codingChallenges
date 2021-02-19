const person = { firstName: 'Gyasi', age: 24, hobbies: 'sports, coding, videography', greet() {
    console.log('Hi I am Gyasi')
} };

console.log(person.firstName);

person.lastName = 'Calhoun'

console.log(person.lastName)

delete person.age

console.log(person)