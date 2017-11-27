const n = 5;

let index = 1;
let fact = 1;

while (index <= n) {
    fact *= index;
    index += 1;
}

let m = 5;
let fact2 = 1;

while (m > 0) {
    fact2 *= m;
    m -= 1;
}

console.log(fact);
console.log(`${m}! = ${fact2}`);
