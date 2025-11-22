"use strict";
function describeUserExample(u) {
    if ('permissions' in u) {
        return `Admin ${u.permissions.join(',')}`;
    }
    return `User ${u.expiresAt.toISOString()}`;
}
console.log(describeUserExample({ role: "User", expiresAt: new Date() }));
const p1 = { name: 'John' };
const p2 = { name: 'Ben', contact: { email: "ben@gmail.com" } };
console.log(p1.contact?.email);
console.log(p2.contact?.email);
// ?? -> uses right hand default only when the left is null or undefined
// || -> uses default when the left is any falsy value (0, "", null, undefined, NAN)
const countFromServerN3 = 0;
const levelFromServerN3 = '';
const aN3 = countFromServerN3 ?? 100; // keeps the 0
const bN3 = levelFromServerN3 || 100; // keeps the 100
console.log(aN3);
