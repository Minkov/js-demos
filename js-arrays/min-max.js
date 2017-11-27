// const numbers = [1, 2, 3, 4, 1, 2, 3, 4, -2];

// let min = numbers[0];

// for (const number of numbers) {
//     min = Math.min(number, min);
// }

// let min2 = numbers[0];
// numbers.forEach((number) => min2 = Math.min(number, min2));

// console.log(min);
// console.log(numbers.indexOf(min));
// console.log(min2);

// console.log(Math.min(1, 2, -3, 4, -7));
// console.log(Math.min.apply(null, numbers));
// console.log(Math.min(...numbers));
// console.log(Math.max(...numbers)); 


const people = [{
        name: "John",
        age: 3
    },
    {
        name: "Jane",
        age: 3
    },
    {
        name: "Acho",
        age: 2
    },
    {
        name: "Pesho",
        age: 1
    },
];

if (people.length === 0) {

}

let youngestPersonIndex = 0;
let youngestPerson = people[youngestPersonIndex];

for (let i = 0; i < people.length; i += 1) {
    const person = people[i];
    if (person.age < youngestPerson.age) {
        youngestPersonIndex = i;
        youngestPerson = person;
    }
}

console.log('-'.repeat(30));
console.log(youngestPerson);
console.log(youngestPersonIndex);

let youngestPeople = [];
for (const person of people) {
    if (person.age === youngestPerson.age) {
        youngestPeople.push(person);
    }
}

console.log(youngestPeople);