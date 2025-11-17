"use strict";
function func1(a, b) {
    return a + b;
}
const nums2 = [1, 2, 3];
const doubled = nums2.map(x => x * 2);
console.log(doubled);
const times2 = (n) => n * 2;
function distanceFromOrigin(p) {
    return Math.hypot(p.x, p.y);
}
distanceFromOrigin({ x: 0, y: 10 });
