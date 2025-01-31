// arrays

// 1️⃣ Basic Array Syntax

// There are two ways to define an array in TypeScript:

// 1.Using square brackets [] (Recommended)
// 2.Using the Array<Type> syntax

var numbers = [1, 2, 3, 4, 5];
var names = ["Jenesh", "Alice", "Bob"];

// Using the alternative syntax
var numbersAlt = [10, 20, 30];

console.log(numbers);
console.log(names);
console.log(numbersAlt);

//2️⃣ Array with Mixed Types (Union Type)

// You can define an array that can hold multiple types using union types.

let mixedArray: (string | number)[] = ["Jenesh", 25, "Alice", 30];

console.log(mixedArray);

// 3️⃣ Readonly Arrays

// If you want to prevent modifying an array after it has been created, use the readonly modifier.

const readonlyNumbers: readonly number[] = [1, 2, 3, 4];

// readonlyNumbers.push(5); // ❌ Error: Cannot modify a readonly array
console.log(readonlyNumbers);

//4️⃣ Array of Objects

// You can define an array that contains objects.

interface Person {
    name: string;
    age: number;
  }
  
  let people: Person[] = [
    { name: "Jenesh", age: 25 },
    { name: "Alice", age: 30 },
  ];
  
  console.log(people);

// 5️⃣ Multi-dimensional Arrays

// TypeScript supports multi-dimensional arrays, like 2D arrays.

let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  console.log(matrix);
  
  



