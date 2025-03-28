const obj = {
  name: "Minh",
  normalFunc: function () {
    console.log(this.name);
  },
  arrowFunc: () => {
    console.log(this.name);
  },
};

obj.normalFunc();
obj.arrowFunc();

// dùng arrow func bên trong func dec
const person = {
  name: "Minh",
  sayHello: function () {
    const arrowFunc = () => {
      console.log(`Hello, ${this.name}`);
    };
    arrowFunc();
  },
};

person.sayHello();

// lưu this vào 1 biến

const person1 = {
  name: "Minh",
  sayHello: function () {
    const self = this;
    const arrowFunc = () => {
      console.log(`Hello, ${self.name}`);
    };
    arrowFunc();
  },
};

person1.sayHello();

// dùng bind
// ép this của arrow func về this của object
const person2 = {
  name: "Quang",
  sayHello: function () {
    const arrowFunc = (() => {
      console.log(`Hello, ${this.name}`);
    }).bind(this);

    arrowFunc();
  },
};

person2.sayHello();

// dùng class
// không khuyến cáo
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello = () => {
    console.log(`Hello, ${this.name}`);
  };
}

const person3 = new Person("Minh");
person3.sayHello();

// Object properties
let name = person.name;
let name1 = person["name"];

//add properties
person.age = 24;

//delete properties
//delete person.age

const person = {
  name: "Quang Minh",
  age: 24,
  city: "Ha Noi",
};

// Display Properties
document.getElementById("profile").innerHTML =
  person.name + "," + person.age + "," + person.city;

let text = "";
for (let x in person) {
  text += person[x] + " ";
}

document.getElementById("profile").innerHTML = text;
// create an array from the property
const myArray = Object.values(person);
console.log(myArray);

const fruits = { Banana: 300, Orange: 200, Apple: 500 };
// tao 1 mang
let text1 = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
}

//JSON.stringify() convert object to string
