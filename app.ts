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

