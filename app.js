var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var num1 = 1;
function calculate(num1, num2) {
    return num1 + num2;
}
console.log(calculate(num1, 6));
function getTotal(numbers) {
    return numbers.reduce(function (acc, cur) { return acc + cur; }, 0);
}
console.log(getTotal([2, 5, 3]));
var user = {
    firstName: "John",
    lastName: "Doe",
    role: 'professor'
};
console.log(user.firstName);
var newUser = {
    name: "Hamza",
    age: 29,
};
function login(userData) {
    return userData;
}
console.log(login(newUser));
var userId = 123;
var transaction1 = {
    payeeAccountNumber: 1234,
    payerAccountNumber: 5678
};
var transaction2 = {
    payeeAccountNumber: 1234,
    payerAccountNumber: 5678
};
var bankAccount = {
    accountNumber: 1234,
    accountHolder: "John Doe",
    balance: 100,
    isActive: true,
    transactions: [transaction1, transaction2]
};
var book = {
    name: "Atomic Habits",
    price: 1200,
};
var ebook = __assign(__assign({}, book), { fileSize: 300, format: "pdf" });
var audioBook = __assign(__assign({}, ebook), { duration: 1 });
var fruit = {
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
