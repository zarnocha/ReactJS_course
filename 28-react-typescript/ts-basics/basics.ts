// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives:

let age: number;
age = 123;

let userName: string | string[];
userName = "Artur";

let isInstructor: boolean;
isInstructor = false;

// More complex types:

let hobbies: string[];
hobbies = ["A", "B", "C"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Artur",
  age: 123,
};

// person = {
//   isEmployee: true,
// };

let people: Person[];

// Type inference

let course: string | number = "React - The complete guide";

course = 1234;

// Functions & types:

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any): void {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
// updatedArray[0].split(""); // error

const stringArray = insertAtBeginning<string>(["a", "b", "c"], "d");
