/* globals Map, Set */
const words = 'Some words, Some words, another'.split(/[ .,!]/)
    .filter((word) => word);
console.log(words);

const wordsCounter = new Map();
console.log(wordsCounter.get('123123123'));

words.forEach((word) => {
    let count = 0;

    if (wordsCounter.has(word)) {
        count = wordsCounter.get(word);
    }

    wordsCounter.set(word, count + 1);
});

let max = 0;
let bestWord = '';
for (const word of wordsCounter.keys()) {
    if (max < wordsCounter.get(word)) {
        max = wordsCounter.get(word);
        bestWord = word;
    }
}

console.log(bestWord);
console.log(wordsCounter.size);

// console.log(wordsCounter);
// console.log(wordsCounter.keys());
// console.log([...wordsCounter.keys()].sort());

const uniqueWords = [...new Set(words)];

// words.forEach((word) => uniqueWords.add(word));

console.log(uniqueWords);

const map = new Map();
map.set('1', 'John');
map.set('2', 'John');
console.log(map);

map.set('2', 'Jane');
console.log(map);
