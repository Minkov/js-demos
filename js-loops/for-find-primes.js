// N is prime, if it is ony divisable by 1 and N
const n = 2;
const m = 49;

let isPrime = (number) => {
    for (let divider = 2; divider <= Math.sqrt(number); divider += 1) {
        //(m - n + 1) * Math.sqrt(number) - 2 + 1
        if (number % divider === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(123));

// -> m - n + 1

// O(m - n) * O(isPrime)
for (let number = n; number <= m; number += 1) {
    let isNumberPrime = isPrime(number);
    console.log(`${number} -> ${isNumberPrime}`);
    // -> Math.sqrt(number) - 2 + 1
}

// -> 2, 3, 4, 5, 6, 7, 8, 9, 10 ........, n - 1

/*
36
2 * 18
3 * 12
4 * 9
6 * 6

6 * 6
9 * 4
12 * 3
18 * 2
*/