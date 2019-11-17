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

Person(name, city, age);
{
  this.name = name;
  this.city = city;
  this.age = age;
}
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${name}. I'm ${age} years old, and I live in ${city}.`)
};


Person.sayHello('Kelvin', '60', 'Arab');
Person.sayHello('Nancy', '58', 'Arab');
Person.sayHello('Anna Beth', '33', 'Arab');
Person.sayHello('Will', '31', 'Arab');
Person.sayHello('Seth', '28', 'Spring Hill');
