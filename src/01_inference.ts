// Goal => understand when to let Typescript infer types
// Typescript Knows the Javascript very well
// we need to understand
//     1. When typescript will write the types
//     2. Or When we will write the types

let count = 0; // ts sees/infer number
const site = 'google'; // ts sees the exact literal "google"
const scores = [10, 20, 30, 40, 50];

// Over annotation isn't bad => Just noisy
export function add(a: number, b: number): number {
    return a + b;
}

console.log(add(1, 2));

// You should also annotate when the type is not obvious
let maybe: string | number; // Union Types
maybe = Math.random() > 0.5 ? "Test" : 10;