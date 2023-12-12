/**
 * Filename: advanced_code.js
 * Content: An advanced and elaborate JavaScript code example
 */

// Creating a class for a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet the person
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating an object from the Person class
const person1 = new Person("John", 25);
person1.sayHello();

// Creating an asynchronous function that returns a promise
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulating a network request delay
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

// Using the asynchronous function with await keyword
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();

// Creating a higher order function that returns a closure
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(3)); // Output: 6

// Creating a generator function
function* fibonacci() {
  let previous = 0;
  let current = 1;

  while (true) {
    yield current;
    const next = previous + current;
    previous = current;
    current = next;
  }
}

const fibonacciGenerator = fibonacci();
console.log(fibonacciGenerator.next().value); // Output: 1
console.log(fibonacciGenerator.next().value); // Output: 1
console.log(fibonacciGenerator.next().value); // Output: 2
console.log(fibonacciGenerator.next().value); // Output: 3

// Using array map, filter, and reduce methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum); // Output: 15

// Defining a custom error class
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

// Throwing and catching custom error
function throwError() {
  throw new CustomError("This is a custom error.");
}

try {
  throwError();
} catch (error) {
  console.error(error.name + ": " + error.message);
}