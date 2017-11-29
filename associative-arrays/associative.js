const text = "I am hungry! Hungry I am, and I am hungry!";
const words = text.split(/[ !,]/);

const wordsOccurances = {};

for (const word of words) {
    const wordToLower = word.toLowerCase();

    if (word === "") {
        continue;
    }

    if (wordsOccurances[wordToLower] === undefined) {
        wordsOccurances[wordToLower] = {};
    }

    wordsOccurances[wordToLower][word] = true;
}

console.log(words);
console.log(wordsOccurances);