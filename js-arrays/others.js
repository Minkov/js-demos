// const arr = Array.from({
//         length: 10
//     })
//     .fill(null)
//     .map(() => parseInt(5 * Math.random()));

const arr = [1, 3, 10, 4, 0, 3, 4, 0, 2, 3]
    .map((number) => number + "");

const value = 3;
console.log(arr);
const indices = [];

let index = arr.indexOf(value);

while (index >= 0) {
    indices.push(index);
    index = arr.indexOf(value, index + 1);
}

console.log(arr.includes(3));
console.log(arr.indexOf(3) >= 0);

console.log(indices);

console.log('-'.repeat(30));
console.log(arr);
console.log(arr.sort((x, y) => y - x));
console.log(arr);

const x = [1, 2, 3];
const y = [4, 5, 6];
console.log(x);
let result = x.concat(y);
result = [].concat(x)
    .concat(y);
console.log(result);

const subarray = result.slice(3);
console.log(subarray);
console.log(result);
console.log([1, 2, 3] + [4, 5, 6]);

console.log(result.slice(500, 3));