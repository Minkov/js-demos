// spread

const arr = [1, 2, 3, 4, -1, 3];
console.log(Math.min(...arr));
const newElements = [1, 2, 3, 4, ];
arr.push(...newElements);
console.log(arr);

// const copy = Array.from(arr);
// const copy = arr.slice();
// const copy = arr.slice(0);
const copy = [...arr];

const x = [1, 2, ];
const y = [3, 4, ];

const result = [...x, ...y];
console.log(result);

// rest

// rest
let [first, second, ...others] = arr;
console.log('First -> ' + first);
console.log('Second -> ' + second);
console.log('Others -> ' + others);

// spread
let arr2 = [first, second, ...others];
console.log(arr2);

let a = 5;
let b = 6;

// let temp = a;
// a = b;
// b = temp;

[a, b] = [b, a];

console.log(a, b);