// 0 -> 4, len = 5
// 1 -> 3, len = 5

let matrix = [
    [1, 2, 3, 4, 5],
    [2, 1, 4, 5, 6],
    [3, 4, 1, 6, 7],
    [4, 5, 6, 1, 8],
    [5, 6, 7, 8, 1],
];

// sum of values below the main diagonal
// let sum = 0;

// for (let row = 0; row < matrix.length; row += 1) {
//     const counter = row + 1;
//     for (let col = 0; col < counter; col += 1) {
//         sum += matrix[row][col];
//     }
// }
// console.log(sum);

// sum of values over the main diagonal
let sum = 0;

for (let row = 0; row < matrix.length; row += 1) {
    for (let col = row; col < matrix[row].length; col += 1) {
        sum += matrix[row][col];
    }
}
console.log(sum);

// sum of matrix
// let sum = 0;
// for (const row of matrix) {
//     for (const cell of row) {
//         sum += cell;
//     }
// }