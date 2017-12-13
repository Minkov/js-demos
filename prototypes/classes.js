// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// };

// Person.prototype.introduce = function() {
//     console.log(`Hi! I am ${this.name}`);
// };

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {

    }
}

// name, age
// introduce()

// const johnsName
const john = new Person("John", 13);
const jane = new Person("Jane", 14);
john.introduce();
jane.introduce();