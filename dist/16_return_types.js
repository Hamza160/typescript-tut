// Inference Example
const doubleFunction = (n) => n * 2;
// Explicit Return for exported/public function
export function toTitle(s) {
    return `Hello, ${s}!`;
}
function booleanToNumber(flag) {
    if (flag) {
        return 1;
    }
    else {
        return 0;
    }
}
async function loadCountInfered() {
    return 42;
}
loadCountInfered().then(count => console.log(count));
