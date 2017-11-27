const names = ["John", "Stamat", "Pesho", ];

names[-1] = "asdasd";
console.log(names);
names[names.length] = "Jane";
names.push(-7);
console.log(names);

names[10] = "BIG";

for (let i = 0; i < names.length; i += 1) {
    console.log(names[i]);
}

for (const key in names) {
    console.log(key);
}

for (const name of names) {
    console.log(name);
}

console.log('-'.repeat(23));
names.length = "3";
console.log(names);
names.forEach((name, index) => console.log(index + " " + name));