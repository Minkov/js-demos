const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const gets = this.gets || getGets(['5', '1', '2', '3', '4', '5']);
const print = this.print || console.log;

const n = +gets();
let sum = 0;
for (let i = 0; i < n; i += 1) {
    sum += +gets();
}

print(sum);