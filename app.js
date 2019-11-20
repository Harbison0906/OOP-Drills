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
    console.log(`Hello, my name is ${this.name}. I'm ${this.age} years old, and I live in ${this.city}.`);
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

class Vehicle {
  constructor(manufacturer, wheels) {
    this.manufacturer = manufacturer;
    this.wheels = wheels;
  }
  aboutVehicle() {
    console.log('')
  }
}

class Trucks extends Vehicle {
  constructor(manufacturer, wheels, doors, truckBed) {
    super(manufacturer, wheels);
    this.doors = doors;
    this.truckBed = truckBed;
  }
  aboutVehicle() {
    if (this.truckBed) {
      console.log(`I'm a truck. I'm made by ${this.manufacturer}, and I have ${this.wheels} wheels and ${this.doors} doors.`);
    }
  }
}
let truck = new Trucks('Ford', 4, 2, true);
truck.aboutVehicle();

class Sedan extends Vehicle {
  constructor(manufacturer, wheels, size, mpg) {
    super(manufacturer, wheels);
    this.size = size;
    this.mpg = mpg;
  }
  aboutVehicle() {
    console.log(`I'm a ${this.size} ${this.manufacturer} sedan. I have ${this.wheels} wheels and get ${this.mpg} miles per gallon.`);
  }
}
let sedan = new Sedan('Honda', 4, 'small', 30);
sedan.aboutVehicle();

class Motorcycle extends Vehicle {
  constructor(manufacturer, wheels, handlebars, noDoors) {
    super(manufacturer, wheels);
    this.handlebars = handlebars;
    this.noDoors = noDoors;
  }
  aboutVehicle() {
    if (this.handlebars && this.noDoors) {
      console.log(`I'm a motorcycle made by ${this.manufacturer}, and I have ${this.wheels} wheels.`);
    }
  }
}
let moto = new Motorcycle('Ducati', 2, true, true);
moto.aboutVehicle();