"use strict";
// object shapes -> similar to interface
// union types (A | B)
// intersection types (A & B)
const person1 = {
    id: '1',
    address: 'St # 3 NBHDA',
    salary: 100,
};
function nextActionCheck(s) {
    switch (s) {
        case 'new':
            return 'new';
        case 'paid':
            return 'paid';
        case 'pending':
            return 'pending';
    }
}
// Intersections
