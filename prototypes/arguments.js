
//
const sum = function (arr) {
    const args = Array.prototype.slice.call(arguments, 0);
    console.log(args.sort());

    let s = 0;

    for (const x of arr) {
        s += x;
    }

    return s;
}

sum([1, 2, 3, 4]);