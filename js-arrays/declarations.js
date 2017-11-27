const a1 = [1, 2, 3, 4, 5, ];
const a2 = new Array(5);
const a3 = new Array(1, 2, 3);
const a4 = Array.of(1, 2, 3, 4);
const a5 = Array.from(a1);
const a6 = Array.from({
    length: 5,
    4: "Gosho",
    1: "Jane",
    0: "John",
});

const a7 = a3.slice(1, 3);
const a8 = a1.slice();

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(a7);