/*
1. What is TypeScript?
Answer:
TypeScript is a superset of JavaScript that adds static types to the language. It helps catch errors early in the development process through type checking and improves code quality and readability. TypeScript compiles to JavaScript and can be used anywhere JavaScript runs.

2. What are the basic types in TypeScript?
Answer:
TypeScript has several basic data types:

number: Represents both integers and floating-point numbers.
string: Represents text values.
boolean: Represents true or false.
null: Represents a null value.
undefined: Represents a variable that has not been assigned a value.
any: Represents any type of value (used when you don't want to enforce type checking).
void: Represents the absence of a type (used for functions that do not return a value).
never: Represents values that never occur (e.g., a function that always throws an error).
typescript
Copy code
let num: number = 42;
let str: string = 'Hello';
let isActive: boolean = true;
let notDefined: undefined = undefined;
let nothing: null = null;
3. What is the difference between any and unknown in TypeScript?
Answer:

any: Disables type checking completely, allowing any type to be assigned to a variable. It can lead to runtime errors because no type checking is done.

typescript
Copy code
let value: any = 5;
value = 'Hello'; // No error
unknown: Represents any value but forces you to check the type before performing any operations on it. This provides more safety than any.

typescript
Copy code
let value: unknown = 5;
if (typeof value === 'string') {
  console.log(value.toUpperCase()); // Safe to access
}
4. What are interfaces in TypeScript?
Answer:
Interfaces in TypeScript define the structure of an object or class. They can be used to enforce that an object or class adheres to a specific shape. Interfaces can also be extended or implemented by other interfaces or classes.

typescript
Copy code
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: 'John',
  age: 30,
};
5. What is a type alias in TypeScript?
Answer:
A type alias is a way to give a type a name. It can be used to define complex types, including unions and intersections.

typescript
Copy code
type Point = {
  x: number;
  y: number;
};

const point: Point = {
  x: 10,
  y: 20,
};
6. What is the difference between an interface and a type alias?
Answer:

Interface: Defines a structure for objects or classes. It can be extended or implemented, and it supports declaration merging (when multiple interfaces with the same name are declared, they are merged).
Type Alias: Can define any valid TypeScript type, including primitives, objects, unions, and intersections. It cannot be extended or merged, but it can represent more complex types.
typescript
Copy code
interface Animal {
  name: string;
}

type AnimalType = {
  name: string;
};

// Both are functionally equivalent in many cases, but `type` is more flexible.
7. What is a tuple in TypeScript?
Answer:
A tuple is a special type of array in TypeScript where elements can have different types. You define the types of the elements when declaring the tuple.

typescript
Copy code
let tuple: [string, number, boolean] = ['Hello', 42, true];
8. What are generics in TypeScript?
Answer:
Generics allow you to create reusable functions, classes, or interfaces that work with any data type, while still providing type safety. It enables type inference based on the data passed to the generic type.

typescript
Copy code
function identity<T>(arg: T): T {
  return arg;
}

let result = identity(5); // result is inferred as number
9. What is the void type in TypeScript?
Answer:
The void type is used for functions that do not return a value. It indicates that the function has no return value.

typescript
Copy code
function logMessage(message: string): void {
  console.log(message);
}
10. What is the never type in TypeScript?
Answer:
The never type represents values that never occur. It's used for functions that always throw an error or have infinite loops and never return a value.

typescript
Copy code
function throwError(message: string): never {
  throw new Error(message);
}
11. How do you declare a function type in TypeScript?
Answer:
A function type in TypeScript can be declared by defining the function signature, including the types for the parameters and the return type.

typescript
Copy code
let add: (a: number, b: number) => number = (a, b) => a + b;
12. What is the purpose of as in TypeScript?
Answer:
The as keyword is used for type assertions. It allows you to tell the TypeScript compiler that you know better than it does about the type of a value, effectively overriding the type inference.

typescript
Copy code
let value: any = 'Hello';
let strLength: number = (value as string).length; // Type assertion
13. What is the difference between let and const in TypeScript?
Answer:

let: Declares a variable that can be reassigned.
const: Declares a constant variable whose value cannot be reassigned. However, the properties of objects declared with const can still be modified.
typescript
Copy code
let num: number = 10;
num = 20; // Allowed

const pi: number = 3.14;
// pi = 3.14159; // Error: Cannot assign to 'pi' because it is a constant.
14. What is a Union type in TypeScript?
Answer:
A Union type allows a variable to have multiple types. It is defined using the | (pipe) operator.

typescript
Copy code
let value: string | number;
value = 'Hello'; // Valid
value = 42; // Valid
15. What is type inference in TypeScript?
Answer:
Type inference is a feature in TypeScript where the compiler automatically determines the type of a variable based on its value. You don’t always need to explicitly declare the type when assigning values, as TypeScript can infer it.

typescript
Copy code
let name = 'John'; // TypeScript infers that `name` is a string

*/