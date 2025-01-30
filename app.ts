// all code data types how to use 

// number type
let age: number = 30;
let temperature: number = 36.6;
console.log(`Age: ${age}, Temperature: ${temperature}`);

// string type
let name1: string = "Jenesh";
let greeting: string = `Hello, ${name1}!`;
console.log(greeting);

// boolean type
let isActive: boolean = true;
let isCompleted: boolean = false;
console.log(`Active: ${isActive}, Completed: ${isCompleted}`);

// null and undefined types
let user: null = null;  // null represents the absence of a value
let score: undefined = undefined;  // undefined means the value hasn't been assigned
console.log(`User: ${user}, Score: ${score}`);

// object type
let person: object = { name: "Jenesh", age: 30 };
console.log(person);

// any type (use cautiously)
let anything: any = "This can be any type!";
anything = 123;  // can be reassigned to any type
anything = true;
console.log(anything);

