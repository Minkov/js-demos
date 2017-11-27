const n = 3;

let matrix = [];
for (let i = 0; i < n; i += 1) {
    const row = Array.from({
        length: n
    });

    matrix.push(row);
}

/*
    0 -> right
    1 -> down
    2 -> left
    3 -> up
*/

let dir = 0;
let row = 0;
let col = 0;

let rowDirs = [0, +1, 0, -1];
let colDirs = [+1, 0, -1, 0];

for (let counter = 1; counter <= n * n; counter += 1) {
    matrix[row][col] = counter;
    let nextRow = row + rowDirs[dir];
    let nextCol = col + colDirs[dir];

    if (nextRow >= n || nextRow < 0 ||
        nextCol >= n || nextCol < 0 ||
        matrix[nextRow][nextCol] !== undefined) {
        dir += 1;
        dir %= 4;
    }

    row += rowDirs[dir];
    col += colDirs[dir];
}

// for (let counter = 1; counter <= n * n; counter += 1) {
//     if (row < n && row >= 0 &&
//         col < n && col >= 0 &&
//         matrix[row][col] === undefined) {
//         matrix[row][col] = counter;
//     } else {
//         row -= rowDirs[dir];
//         col -= colDirs[dir];
//         dir += 1;
//         dir %= 4;

//         counter -= 1;
//     }

//     row += rowDirs[dir];
//     col += colDirs[dir];
// }

for (const row of matrix) {
    console.log(row);
}