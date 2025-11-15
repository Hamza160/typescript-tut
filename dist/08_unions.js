"use strict";
function printId(id) {
    // Narrowing
    if (typeof id === "string") {
        console.log(id.toString());
    }
    else {
        console.log(id.toFixed(2));
    }
}
function describeUser(user) {
    if (user.role === "Admin") {
        console.log(user.permissions);
    }
    else {
    }
}
function describeUserWithInOperator(user) {
    if ('permissions' in user) {
        console.log(user.role, 'Admin User');
    }
    else {
        console.log(user.loyaltyPoints);
    }
}
// array of unions
const arrayOfUnion = ["a", 1, "b", 2];
// unions of array
const unionOfArray = Math.random() > 0.1 ? ["x", "y"] : [1, 3];
unionOfArray.push(1);
