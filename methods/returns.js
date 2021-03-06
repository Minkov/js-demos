const sum = (numbers) => {
    if (!Array.isArray(numbers)) {
        console.log('Not an array');
        return null;
    }

    let theSum = 0;

    for (const number of numbers) {
        theSum += number;
    }

    return theSum;
};

const numbers = [1, 2, 3];

const theSum = sum(numbers);
console.log(sum(numbers));
console.log(theSum);
console.log(theSum / numbers.length);


const minMax = () => {
    const min = 1;
    const max = 2;
    return {
        max,
        min,
    };
};

const {
    min,
    max,
} = minMax();

console.log(min, max);
