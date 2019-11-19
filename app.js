// let person1 = {
//   name: 'Kelvin',
//   sayHello: function() {
//     console.log(`Hello! My name is ${person1.name}.`)
//   }
// };
// let person2 = {
//   name: 'Nancy',
//   sayHello: function() {
//     console.log(`Hello! My name is ${person2.name}.`)
//   }
// };
// let person3 = {
//   name: 'Anna Beth',
//   sayHello: function() {
//     console.log(`Hello! My name is ${person3.name}.`)
//   }
// };
// let person4 = {
//   name: 'Will',
//   sayHello: function() {
//     console.log(`Hello! My name is ${person4.name}.`)
//   }
// };
// let person5 = {
//   name: 'Seth',
//   sayHello: function() {
//     console.log(`Hello! My name is ${person5.name}.`)
//   }
// };
class Person {
  constructor(name, city, age) {
    this.name = name;
    this.city = city;
    this.age = age;
  }
  sayHello() {
    console.log('Hello, my name is ' + this.name + '. I am ' + this.age + ' years old, and I live in ' + this.city + '.');
  }
}



let p1 = new Person('Kelvin', 'Arab', '60');
let p2 = new Person('Nancy', 'Arab', '58');
let p3 = new Person('Anna Beth', 'Arab', '33');
let p4 = new Person('Will', 'Arab', '31');
let p5 = new Person('Seth', 'Spring Hill', '28');
p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello();
