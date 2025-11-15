"use strict";
function move(direction) {
    console.log(direction);
}
const d1 = 'left'; // with const TS keep literal type as it is
move(d1);
let d2 = 'right'; // with let TS widens to string coz d2 value can be changed
move(d2);
let d3 = 'left'; // now it will work coz we annotate the type
move(d3);
