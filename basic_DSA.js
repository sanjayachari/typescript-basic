/*

1. Copying Arrays in JavaScript
Using slice() Method: The slice() method returns a shallow copy of a portion of an array into a new array object.

javascript
Copy code
let originalArray = [1, 2, 3, 4];
let copiedArray = originalArray.slice();

console.log(copiedArray);  // [1, 2, 3, 4]
console.log(originalArray === copiedArray);  // false, different reference
Using Spread Operator: The spread operator (...) can be used to create a shallow copy of an array.

javascript
Copy code
let originalArray = [1, 2, 3, 4];
let copiedArray = [...originalArray];

console.log(copiedArray);  // [1, 2, 3, 4]
console.log(originalArray === copiedArray);  // false, different reference
Using Array.from() Method: The Array.from() method creates a new array instance from an array-like or iterable object.

javascript
Copy code
let originalArray = [1, 2, 3, 4];
let copiedArray = Array.from(originalArray);

console.log(copiedArray);  // [1, 2, 3, 4]
console.log(originalArray === copiedArray);  // false, different reference
2. Hoisting in JavaScript
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope during the compile phase.

Hoisting with var (Function and Global Scopes):

javascript
Copy code
console.log(a);  // undefined, because `a` is hoisted but not initialized yet
var a = 10;
console.log(a);  // 10

function hoistedFunction() {
    console.log('Hoisted!');
}

hoistedFunction();  // 'Hoisted!' can be called even before its declaration
Hoisting with let and const (Block Scope): let and const are hoisted, but they do not initialize until the code execution reaches them.

javascript
Copy code
console.log(b);  // ReferenceError: Cannot access 'b' before initialization
let b = 20;
Hoisting with Functions: Function declarations are hoisted with both the function definition and its body.

javascript
Copy code
greet();  // 'Hello, world!'

function greet() {
    console.log('Hello, world!');
}
3. Currying in JavaScript
Currying is a functional programming technique where a function takes multiple arguments one at a time. It transforms a function with multiple arguments into a series of functions that each take a single argument.

javascript
Copy code
function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const multiplyBy2 = multiply(2);
console.log(multiplyBy2(3));  // 6
4. Callback in JavaScript
A callback function is a function that is passed as an argument to another function, which is then invoked after a certain task is completed.

javascript
Copy code
function fetchData(callback) {
    setTimeout(() => {
        console.log('Data fetched');
        callback();
    }, 1000);
}

function processData() {
    console.log('Data processed');
}

fetchData(processData);
5. Promise in JavaScript
A Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value.

javascript
Copy code
let myPromise = new Promise(function(resolve, reject) {
    let success = true;
    if(success) {
        resolve('Data fetched successfully');
    } else {
        reject('Data fetch failed');
    }
});

myPromise.then(function(value) {
    console.log(value);  // 'Data fetched successfully'
}).catch(function(error) {
    console.log(error);  // 'Data fetch failed'
});

*/