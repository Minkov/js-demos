const arr = [1, 2, 3];
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 1, 1],
];

for (let row = 0; row < matrix.length; row += 1) {
    let rowString = "";

    for (let col = 0; col < matrix[row].length; col += 1) {
        const cell = matrix[row][col];
        rowString += `${cell} `;
    }

    console.log(rowString.trim());
}

for (const row of matrix) {
    let rowString = "";
    for (const cell of row) {
        rowString += `${cell} `;
    }

    console.log(rowString.trim());
}

for (const row of matrix) {
    let rowString = row.join(" ");
    console.log(rowString.trim());
}


const cube = [
    // floor 0
    [
        [1, 2, 3],
        [2, 3, 4]
    ],
    // floor 1
    [
        [1, 2, 3],
        [2, 3, 4]
    ]
];
