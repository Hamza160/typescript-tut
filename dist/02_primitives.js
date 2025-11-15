"use strict";
let username = "Hamza";
let age = 20;
let isCreator = true;
const big = 2n ** 63n - 1n;
// TS2365: Operator + cannot be applied to types bigint and number
// const mixed = big + age;
// Symbol Type
const TOKEN = Symbol("TOKEN");
function yearsToDay(years) {
    return years * 365;
}
console.log(username.toLocaleLowerCase());
console.log(yearsToDay(20));
