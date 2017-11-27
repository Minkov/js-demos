const arr = [1, 2, 3, 4, 5, 6, ];

console.log(arr);

console.log(arr.splice(-1, 0, "Three", "Four", "Five", "Pesho"));
console.log(arr.splice(arr.length - 1, 2, "Three", "Four", "Five", "Pesho"));
console.log(arr);
console.log(arr.join(", "));
arr.join("--xxx--");
console.log(arrString);