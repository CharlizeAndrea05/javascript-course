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
