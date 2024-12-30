/*
1. What is JavaScript?
JavaScript is a high-level, interpreted programming language that is primarily used for building dynamic and interactive websites. It runs in the browser and can also be used on the server-side with Node.js.

2. What are the different data types in JavaScript?
Primitive types: string, number, boolean, undefined, null, symbol, bigint
Non-primitive (reference) types: object, array, function

3. What is the difference between '==' and '===' in JavaScript?
== (loose equality) compares values after performing type coercion.
=== (strict equality) compares both value and type without performing type coercion.

4. What is a closure in JavaScript?
A closure is a function that retains access to its lexical scope, even when the function is executed outside of that scope.

5. What is the difference between var, let, and const?
var: Function-scoped, can be redeclared and updated.
let: Block-scoped, can be updated but not redeclared in the same scope.
const: Block-scoped, cannot be updated or redeclared, but can be assigned objects or arrays whose properties/elements can change.

6. What is a callback function?
A callback function is a function passed as an argument to another function, which is then invoked after a certain task is completed.

7. What is the difference between null and undefined?
null: Represents an intentional absence of any value.
undefined: Represents an uninitialized variable or a missing value.

8. What is a promise in JavaScript?
A promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value.

9. Explain event delegation in JavaScript.
Event delegation is a technique where a single event listener is attached to a parent element, which listens for events on its child elements, reducing the number of event listeners and improving performance.

10. What are arrow functions in JavaScript?
Arrow functions are a shorter syntax for writing functions in JavaScript. They also do not have their own 'this' context, inheriting it from the surrounding scope.

11. What is the 'this' keyword in JavaScript?
The 'this' keyword refers to the context in which a function is called. It refers to the object that invoked the function, which may vary depending on the calling context.

12. What is hoisting in JavaScript?
Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope during the compile phase. However, only the declarations are hoisted, not the initializations.

13. What is the difference between synchronous and asynchronous code?
Synchronous code executes one operation at a time, blocking further execution until the current one is completed.
Asynchronous code allows other operations to run while waiting for a task to complete, improving performance, especially in I/O operations.

14. What is a higher-order function?
A higher-order function is a function that either takes one or more functions as arguments, returns a function as a result, or both.

15. How does the JavaScript event loop work?
The event loop continuously checks the call stack for function execution and the message queue for asynchronous tasks, executing tasks when the stack is empty.

16. What is a prototype in JavaScript?
A prototype is an object associated with every JavaScript function that allows inheritance and shared properties among instances created by the function.

17. What is the difference between an array and an object?
An array is an ordered collection of elements, indexed by integers.
An object is an unordered collection of key-value pairs.

18. How do you create an object in JavaScript?
An object can be created using either the object literal syntax:
const obj = { key: 'value' };
Or using the new Object() constructor:
const obj = new Object();

19. What is the purpose of the bind() method?
The bind() method creates a new function that, when called, has its 'this' keyword set to a specific value, and prepends any given arguments.

20. What are template literals in JavaScript?
Template literals are string literals that allow for embedded expressions, multi-line strings, and variable interpolation. They are enclosed in backticks and allow embedding variables using ${}.
const name = 'John';
const greeting = `Hello, ${name}!`;
"""

*/