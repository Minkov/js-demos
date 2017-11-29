const arr = [1, 2, 3, 1, 2, 3, 4, 5, 1, 2, 11];

const groups = [];

const base = 11;

for (const number of arr) {
    if (groups[number % base] === undefined) {
        groups[number % base] = [];
    }

    groups[number % base].push(number);
}

console.log(groups);