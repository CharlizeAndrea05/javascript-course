// 'use strict';
// // hour 1 //
 
console.log(varX);
console.log(letX);
console.log(constX);
 
var varX = 1;
let letX = 2;
const constX = 3;
 
function addDecl(a, b) {
    return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
 
const addArrow = (a, b) => a + b;
 
// Hour 2 //
const person = {
    name: 'Jonas',
    greet: function () {
        console.log(`Hello, I am ${this.name}`);
    },
 
};
 
person.greet ();
// method borrowing //
const anotherPerson = { name: 'Sarah'};
anotherPerson.greet = person,greet;
anotherPerson.greet();
 
// detached //
const greetFuction = person.greet;
greetFunction();
 
// arrow function //
const obj = {
    name: 'Object',
 
    regularMethod: function () {
        console.log('Regular:', this.name);
    },
    arrowMethod: () => {
        console.log('Arrow:', this.name);
    }
};
obj.regularMethod();
obj.arrowMethod();
 
const timer = {
  name: 'Timer',
 
  // Old approach with self = this //
  start: function () {
    console.log(`${this.name} starting...`);
 
    const self = this;
 
    setTimeout(function () {
      console.log(`${self.name} finished`);
    }, 1000);
  },
 
  // Modern approach with arrow function //
  startModern: function () {
    console.log(`${this.name} starting modern...`);
 
    setTimeout(() => {
      console.log(`${this.name} finished modern`);
    }, 1500);
  },
};
 
timer.start();
timer.startModern();
 
// Section 3 Arguments //
 
const functionTypes = {
  regularFunction: function () {
    console.log('Arguments length:', arguments.length);
    console.log('First argument:', arguments[0]);
  },
 
  arrowFunction: () => {
    console.log('Arrow function called');
  },
 
  modernFunction: (...args) => {
    console.log('Args length:', args.length);
    console.log('First arg:', args[0]);
  },
};
 
functionTypes.regularFunction('hello', 'world');
functionTypes.arrowFunction('test'); // remove
functionTypes.modernFunction('modern', 'approach');
 
// // Hour 3 //
 
// PRIMITIVES IN STACK //
let age = 30;
let oldAge = age;
age = 31;
 
console.log('age:', age);
console.log('oldAge:', oldAge);
 
const me = { name: 'Kris', age: 30 };
 
const friend = me;
 
friend.name = 'John Doe';
friend.age = 27;
 
console.log('me:', me);
console.log('friend:', friend);
 
 
const original = {
  name: 'Alice',
  age: 28,
  hobbies: ['reading', 'coding'],
};
 
const shallowCopy = { ...original };
shallowCopy.name = 'Bob';
console.log('original name:', original.name);
console.log('copy name:', shallowCopy.name);
 
 
shallowCopy.hobbies.push('gaming');
console.log('original hobbies:', original.hobbies);
console.log('copy hobbies:', shallowCopy.hobbies);
 
// Object.assign alternative
const anotherCopy = Object.assign({}, original);
console.log('Object.assign copy:', anotherCopy);
 
// Deep Copy //
 
const deepOriginal = {
  name: 'Charlie',
  age: 32,
  address: { city: 'Paris', country: 'France' },
  hobbies: ['travel', 'photography'],
};
const deepCopy = structuredClone(deepOriginal);
 
deepCopy.address.city = 'London';
deepCopy.hobbies.push('cooking');
deepCopy.name = 'Lex';
 
console.log('original address:', deepOriginal.address);
console.log('copy address:', deepCopy.address);
console.log('original hobbies:', deepOriginal.hobbies);
console.log('copy hobbies:', deepCopy.hobbies)
