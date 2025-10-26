"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let num1 = 1;
function calculate(num1, num2) {
    return num1 + num2;
}
console.log(calculate(num1, 6));
function getTotal(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}
console.log(getTotal([2, 5, 3]));
const user = {
    firstName: "John",
    lastName: "Doe",
    role: 'professor'
};
console.log(user.firstName);
const newUser = {
    name: "Hamza",
    age: 29,
};
const userId = 123;
const transaction1 = {
    payeeAccountNumber: 1234,
    payerAccountNumber: 5678
};
const transaction2 = {
    payeeAccountNumber: 1234,
    payerAccountNumber: 5678
};
const bankAccount = {
    accountNumber: 1234,
    accountHolder: "John Doe",
    balance: 100,
    isActive: true,
    transactions: [transaction1, transaction2]
};
const book = {
    name: "Atomic Habits",
    price: 1200,
};
const ebook = {
    ...book,
    fileSize: 300,
    format: "pdf",
};
const audioBook = {
    ...ebook,
    duration: 1
};
const fruit = {
    name: "Mango",
    price: 200,
    unit: "kg"
};
function printId(id) {
    // Narrowing
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId("1");
printId(12);
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree("hello"));
console.log(getFirstThree([1, 2, 3, 4, 5]));
// Generics
function logString(arg) {
    console.log(arg);
    return arg;
}
function logNumber(arg) {
    console.log(arg);
    return arg;
}
function logArray(arg) {
    console.log(arg);
    return arg;
}
function logAnything(arg) {
    console.log(arg);
    return arg;
}
logAnything([34, 20]);
function getOldest(people) {
    return people.sort((a, b) => b.age - a.age)[0];
}
const people = [{ age: 30 }, { age: 40 }];
const players = [{ name: 'Hamza', age: 29 }, { name: 'Talha', age: 25 }];
// assertion
// const player: Player = getOldest(players) as Player;
// Generic
const player = getOldest(players);
const fetchPostData = async (path) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${path}`);
    return response.json();
};
const fetchUserData = async (path) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${path}`);
    return response.json();
};
const fetchData = async (path) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${path}`);
    return response.json();
};
(async () => {
    // const posts = await fetchPostData('posts')
    // const users = await fetchUserData('users')
    const users = await fetchData('users');
    const posts = await fetchData('posts');
})();
function login(credentials) {
    console.log(credentials);
    return true;
}
const logUser = {
    username: "hamzaashraf",
    password: "123456",
    isAdmin: true
};
login(logUser);
const auth = {
    username: "hamza",
    password: "123456",
    login: (username, password) => {
        //
        return true;
    }
};
// Type Inference
let num = 1;
let nam = 'hamza';
let isMarried = true;
let address = {
    street: "127.0.0.1",
    city: "Hamza",
    state: "Hamza",
    country: "Hamza",
};
//# sourceMappingURL=app.js.map