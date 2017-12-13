String.prototype.toIntArray = function () {
    return this.split(' ')
        .map(Number);
};

Object.prototype.print = function () {
    console.log(`Object -> ${this}`);
};

Array.prototype.print = function () {
    console.log(`Array -> ${this.join(', ')}`);
};

'1 2 7 4 5 6'.toIntArray()
    .print();

let b = 1;
b.print();