const n = 3;
const m = 13;

// m - n + 1

let number = n;

if (n % 2 === 1) {
    number += 1;
}

while (number <= m) {
    console.log(number);

    number += 2;
}