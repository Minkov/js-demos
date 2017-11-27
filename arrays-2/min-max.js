const matrix = [
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [1, 1, -1, 11111],
];

// Can there be a max element

let max = matrix[0][0];

for (const row of matrix) {
    for (const cell of row) {
        max = Math.max(max, cell);
    }
}

console.log(max);

for (const row of matrix) {
    max = Math.max(max, ...row);
}

// const max2 =
//     matrix.reduce((max, row) => Math.max(max, ...row),
//         Number.MIN_VALUE);

// const cube = [
//     // floor 0
//     [
//         [1, 2, 3],
//         [2, 33, 4]
//     ],
//     // floor 1
//     [
//         [1, 2, 3],
//         [2, 3, 4],
//     ]
// ];

// let maxCube = cube[0][0][0];

// for (const floor of cube) {
//     for (const row of floor) {
//         for (const cell of row) {
//             maxCube = Math.max(maxCube, cell);
//         }
//     }
// }

// console.log(maxCube);