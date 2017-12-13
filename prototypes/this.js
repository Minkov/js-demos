// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// };

// Person.prototype.introduce = function () {
//     console.log(`Hi! I am ${this.name}`);
// };

// // WE HAVE NEW
// const john = new Person('John', 123);

// // this is john
// john.introduce();

// const johnIntroduce = john.introduce;
// const johnIntroduce = Person.prototype.introduce;
// // this is global
// johnIntroduce();

// const simplePerson = {
//     name: 'Jane'
// };

// console.log(simplePerson.name);

// johnIntroduce.call(simplePerson);

console.log([].slice === Array.prototype.slice);

const f = function (...args) {
    console.log(args);
};


var _this = this;
const f = () => {
    console.log(_this);
}

const arr = [1, 2, 3, 4, 5, ];

// console.log(Math.max(11, 1, 1, 2, 3));
console.log(Math.max(...arr));
console.log(Math.max.apply(null, arr));
// console.log(Math.max.apply(Math, arr));
// console.log(Math.max.apply('Gosho', arr));
// console.log(Math.max.apply(5, arr));
// console.log(Math.max.apply(arr, arr));

// this
// global

console.log(this);
console.log(global);

// file-1
var b = 5;
global.b = 5;

// file-2
console.log(b);
console.log(global.b);