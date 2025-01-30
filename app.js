// all code data types how to use 
// number type
var age = 30;
var temperature = 36.6;
console.log("Age: ".concat(age, ", Temperature: ").concat(temperature));
// string type
var name1 = "Jenesh";
var greeting = "Hello, ".concat(name1, "!");
console.log(greeting);
// boolean type
var isActive = true;
var isCompleted = false;
console.log("Active: ".concat(isActive, ", Completed: ").concat(isCompleted));
// null and undefined types
var user = null; // null represents the absence of a value
var score = undefined; // undefined means the value hasn't been assigned
console.log("User: ".concat(user, ", Score: ").concat(score));
// object type
var person = { name: "Jenesh", age: 30 };
console.log(person);
// any type (use cautiously)
var anything = "This can be any type!";
anything = 123; // can be reassigned to any type
anything = true;
console.log(anything);
