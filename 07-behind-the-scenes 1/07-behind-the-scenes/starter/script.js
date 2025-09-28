// Behind the Scenes Development Hour 1 - Scoping & Hoisting
'use strict';

console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');

// Global Execution Context
console.log('Starting program');

function alpha() {
  console.log('alpha:start');
  beta();
  console.log('alpha:end');
}

function beta() {
  console.log('beta');
}

alpha();
// Expected: alpha:start → beta → alpha:end

function outerFunction() {
  console.log('Outer function start');
  innerFunction();
  console.log('Outer function end');
}

function innerFunction() {
  console.log('Inner function');
  console.trace(); 
}

outerFunction();

const globalVar = 'I am global';

function anyFunction() {
  console.log(globalVar); 
}

function myFunction() {
  const functionVar = 'I am function-scoped';
  console.log(functionVar); 
}

if (true) {
  let blockVar = 'I am block-scoped';
  const alsoBlockVar = 'Me too';
  var notBlockScoped = 'I leak out'; 
}

console.log(notBlockScoped);

const outer = 'global';

function demoScope() {
  const inner = 'function';
  if (true) {
    const blockConst = 'block';
    var functionVar = 'var-function-scoped';
    console.log(outer, inner, blockConst, functionVar);
  }
  console.log(outer, inner, /* blockConst not here */, functionVar);
}

demoScope();

const name = 'GlobalName';

function a() {
  const name = 'FunctionName';
  function b() {
    console.log(name); 
  }
  b();
}

a();

console.log(varX);

var varX = 1;
let letX = 2;
const constX = 3;

console.log(varX); 
console.log(letX); 
console.log(constX); 

console.log(addDecl(2, 3));

unction addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

console.log(addDecl(2, 3)); 
console.log(addExpr(2, 3)); 
console.log(addArrow(2, 3));

const apiUrl = 'https://example.com';
console.log(apiUrl);

use strict';

// 1) Hoisting expectation
// console.log(title); // Uncomment to test: TDZ with let
let title = 'Behind the Scenes';

// 2) Scope chain expectation
function outer() {
  const label = 'outer';
  function inner() {
    console.log('scope:', label); // expect 'outer'
  }
  inner();
}
outer();

// 3) Call stack expectation
function one() {
  two();
}
function two() {
  console.log('stack: two');
}
one(); // expect 'stack: two'

const person = {
  name: 'Jonas',
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};

person.greet(); 

const person = {
  name: 'Jonas',
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};

// Method borrowing
const anotherPerson = { name: 'Sarah' };
anotherPerson.greet = person.greet;
anotherPerson.greet(); 

// Detached function call
const greetFunction = person.greet;
greetFunction(); 

// This breaks in event handlers
const button = document.querySelector('button');
button.addEventListener('click', person.greet); // `this` becomes the button element!

// Fix: use arrow function wrapper
button.addEventListener('click', () => person.greet());
// Or bind the method
button.addEventListener('click', person.greet.bind(person));

onst obj = {
  name: 'Object',

  regularMethod: function () {
    console.log('Regular:', this.name); 

  arrowMethod: () => {
    console.log('Arrow:', this.name); 
};

obj.regularMethod(); 
obj.arrowMethod(); 

const quiz = {
  name: 'Quiz Object',
  regularMethod() {
    console.log('Regular:', this.name);
  },
  arrowMethod: () => {
    console.log('Arrow:', this.name);
  },
};

quiz.regularMethod(); 
quiz.arrowMethod(); 

const timer = {
  name: 'Timer',

  // Old approach with self = this
  start: function () {
    console.log(`${this.name} starting...`);
    const self = this;

    setTimeout(function () {
      console.log(`${self.name} finished`);
    }, 1000);
  },

  // Modern approach with arrow function
  startModern: function () {
    console.log(`${this.name} starting modern...`);

    setTimeout(() => {
      console.log(`${this.name} finished modern`); 
    }, 1500);
  },
};

timer.start(); 
timer.startModern(); 

const user = {
  name: 'Alice',
  hobbies: ['reading', 'coding', 'gaming'],

  // BROKEN: arrow function loses `this`
  printHobbiesBad: () => {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`); 
    });
  },

  // FIXED: regular function preserves `this`
  printHobbiesGood() {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`); 
    });
  },
};

user.printHobbiesBad(); 
user.printHobbiesGood(); 

const functionTypes = {
  regularFunction: function () {
    console.log('Arguments length:', arguments.length);
    console.log('First argument:', arguments[0]);
  },

  arrowFunction: () => {
    // console.log(arguments); // ReferenceError: arguments is not defined
    console.log('Arrow function called');
  },

  modernFunction: (...args) => {
    console.log('Args length:', args.length);
    console.log('First arg:', args[0]);
  },
};

functionTypes.regularFunction('hello', 'world');
functionTypes.arrowFunction('test');
functionTypes.modernFunction('modern', 'approach');

// Event handlers and this binding
const userCard = {
  name: 'Sarah',


  setupEvents() {
     console.log('Event setup for:', this.name);
  },
};

userCard.setupEvents();

// Array methods with this context
const calculator = {
  numbers: [1, 2, 3, 4, 5],
  multiplier: 2,

  processNumbers() {
    return this.numbers.map(num => num * this.multiplier);
  },
};

console.log('Processed numbers:', calculator.processNumbers()); 

const myTimer = {
  name: 'My Timer',

  startCountdown() {
    console.log(`${this.name} starting countdown...`);
  },
};

myTimer.startCountdown();