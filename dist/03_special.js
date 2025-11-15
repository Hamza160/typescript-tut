"use strict";
// Union Types
let title = undefined;
// void: when functions doesn't return a useful value
function log(msg) {
    console.log(msg);
}
// Never return a value
function fail(msg) {
    throw new Error(msg);
}
// DO NOT USE ANY => Try to ignore as much as possible
const valueAny = JSON.parse('{"x":1}');
valueAny.notThere.toFixed(2); // this compiles but  can break/explode at run time
