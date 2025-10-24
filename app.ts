let num1: number = 1;

function calculate(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(calculate(num1, 6));


function getTotal(numbers: Array<number>): number {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}

console.log(getTotal([2, 5, 3]))

const user = {
    firstName: "John",
    lastName: "Doe",
    role: 'professor'
}

console.log(user.firstName);

// number
// string
// string[]
// boolean


// Type  Alias => Custom Type

type User = {
    name: string;
    age: number;
    address?: string;
}

const newUser: User = {
    name: "Hamza",
    age: 29,
}

function login(userData: User): User {
    return userData
}

console.log(login(newUser));

// Union Type
type ID = number | string;

const userId: ID = 123;

// Interfaces

interface Transaction {
    payerAccountNumber: number;
    payeeAccountNumber: number;
}

interface BankAccount {
    accountNumber: number;
    accountHolder: string;
    balance: number;
    isActive: boolean;
    transactions: Transaction[];
}

const transaction1: Transaction = {
    payeeAccountNumber: 1234,
    payerAccountNumber: 5678
}

const transaction2: Transaction = {
    payeeAccountNumber: 1234,
    payerAccountNumber: 5678
}

const bankAccount: BankAccount = {
    accountNumber: 1234,
    accountHolder: "John Doe",
    balance: 100,
    isActive: true,
    transactions: [transaction1, transaction2]
}


//  Extend Interface
interface Book {
    name: string;
    price: number;
}

interface EBook extends Book {
    fileSize: number;
    format: string;
}

interface AudioBook extends EBook {
    duration: number;
}

const book: Book = {
    name: "Atomic Habits",
    price: 1200,
}

const ebook: EBook = {
    ...book,
    fileSize: 300,
    format: "pdf",
}

const audioBook: AudioBook = {
    ...ebook,
    duration: 1
}

// Merge Interface

interface Fruit {
    name: string;
    price: number;
}

interface Fruit {
    unit: string;
}

const fruit: Fruit = {
    name: "Mango",
    price: 200,
    unit: "kg"
}

// Other Example
type SanitizedString = string;
type EvenNumber = number;

// Unions
type Id = number | string;

function printId(id: ID) {
    // Narrowing
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

printId("1");
printId(12);


function getFirstThree(x: string | number[]) {
    return x.slice(0, 3);
}

console.log(getFirstThree("hello"));
console.log(getFirstThree([1, 2, 3, 4, 5]));


// Generics

function logString(arg: string) {
    console.log(arg);
    return arg;
}

function logNumber(arg: number) {
    console.log(arg);
    return arg;
}

function logArray(arg: any[]) {
    console.log(arg);
    return arg;
}

function logAnything<T>(arg: T): T {
    console.log(arg);
    return arg;
}

logAnything([34, 20])