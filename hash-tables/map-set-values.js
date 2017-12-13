const set = new Set();
set.add({
    a: 1,
});

set.add({
    a: 1,
});
const obj = {
    a: 1,
};

set.add(obj);
set.add(obj);
set.add(obj);
set.add(obj);

set.add('John');
set.add('John');
console.log(set);
