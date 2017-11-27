let text = "JS Rocks!";

for (const key in text) {
    console.log(`${key} -> ${text[key]}`);
}


for (const key in console) {
    console.log(key);
}

const person = {
    name: "Stamat",
    age: 3
};

console.log(person);
person.name = "John";
delete person.name;
console.log(person);

for (const key in person) {
    console.log(key);
}


for (const ch of text) {
    console.log(ch);
}

for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    console.log(ch);
}