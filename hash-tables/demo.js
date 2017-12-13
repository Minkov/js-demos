// /* globals Map */

// const map = new Map();
// const objMap = {};
// const key = 'John';
// const value = 123;

// console.log(map);

// // Add
// map.set(key, value);
// objMap[key] = value;
// objMap.John = 123;
// console.log(map);

// map.set('Jane', 13);
// console.log(map);

// // Remove/Delete
// map.delete(key);
// delete objMap[key];
// console.log(map);

// // objMap['John'] = false;

// // Get
// console.log(map.get(key));
// console.log(map.get('Jane'));
// objMap[key];

// // Find

// console.log(map.has(key));
// console.log(map.has('Jane'));
// console.log(typeof objMap[key] === 'undefined');
// console.log( objMap.hasOwnProperty(key));

// // length

// map.set('null', null);

// console.log(map.size);
// console.log(Object.keys(objMap).length);

const set = new Set();

// add
set.add('John');
set.add('John');
set.add('John');
set.add('John2');
console.log(set);

// remove/delete
set.delete('John');
console.log(set);

// check
console.log(set.has('John'));
console.log(set.has('Jane'));
console.log(set.has('John2'));

// size
console.log(set.size);

for (const name of set) {
    console.log(name);
}

