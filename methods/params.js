const arr = [1, 2, 3, 1, 2, 10];

const printSign = (number) => {
    if (number < 0) {
        console.log('-');
    } else if (number > 0) {
        console.log('+');
    } else {
        console.log(0);
    }
};

const printSum = (numbers) => {
    if (!Array.isArray(numbers)) {
        console.log('Not an array');
    } else {
        let sum = 0;
        for (const number of numbers) {
            sum += number;
        }
        console.log(sum);
    }
};

printSum([1, 2, 3, 4, 5]);
printSum([5, 4, 1, 2]);
printSum(1, 1);
printSum();

console.log(1);
console.log(1, 2);


const test = (x, y, ...args) => {
    console.log(x);
    console.log(y);
    console.log(args);
};

test(1, 2, 3, 4, 5);
// const arr = [1, 2, 3, 4, ];
test(3, 1, ...arr);
test(...arr);

test(); // undefined, undefined
test(1); // 1, undefined
test(1, 2); // 1, 2
test(1, 2, 3); // 1, 2

console.log(Math.min(1, 2, 3, 4, 5, 6, 7));

const normalizeMinMax = (min, max) => {
    const MAX_MAX = 10;
    if (typeof max === 'undefined') {
        if (typeof min === 'undefined') {
            min = 0;
            max = MAX_MAX;
        } else {
            max = min;
            min = 0;
        }
    }

    return [
        min,
        max,
    ];
};

const getRandom = (min, max) => {
    [min, max] = normalizeMinMax(min, max);
    return parseInt(Math.random() * (max - min) + min, 10);
    // min = 2, max = 5
    // 0 * (5 - 2) + 2 = 2
    // 0.5 * (5 - 2) + 2 = 1.5 + 2 = 3.5 = 3
    // 0.7 * (5 - 2) + 2 = 2.1 + 2 = 4.1 = 4
    // 1 * (5 -2 ) + 2 = 5 - 2 + 2 = 5
    // max - min + min
};

console.log(getRandom(10, 2));
for (let i = 0; i < 10; i += 1) {
    console.log(getRandom(10));
}
