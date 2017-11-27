const arr = [1, 2, 3, 4, 5, 6, ];

console.log(arr);
arr.push(1);
console.log(arr);
arr.push(2, 3);
console.log(arr);
arr.unshift(0);
console.log(arr);

arr.unshift(-3, -2, -1);
console.log(arr);

while (arr.length > 0) {
    console.log(arr.shift());
}

console.log(arr);