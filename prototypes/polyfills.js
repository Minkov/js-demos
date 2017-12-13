if (!Array.prototype.find) {
    Array.prototype.find = function (conditionFunc) {
        for (var i = 0; i < this.length; i += 1) {
            if (conditionFunc(this[i])) {
                return this[i];
            }
        }

        return null;
    };
}

const one = [1, 2, 3, 4].find(function (x) {
    return x === 1;
});

console.log(one);