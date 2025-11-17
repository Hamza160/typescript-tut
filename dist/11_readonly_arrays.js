"use strict";
const xss = [1, 2, 34];
const ys = [1, 2, 3];
const yss = [1, 2, 3, 4];
xss[0] = 9;
// yss.push(9)
// yss.pop()
// yss.splice(0, 1)
function sum(sums) {
    // here the array will be read only and we can't do anything
    return sums.reduce((acc, cur) => acc + cur, 0);
}
sum(xss); // we can pass immutable or muteable array here
