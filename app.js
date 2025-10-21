var num1 = 1;
function calculate(num1, num2) {
    return num1 + num2;
}
console.log(calculate(num1, 6));
function getTotal(numbers) {
    return numbers.reduce(function (acc, cur) { return acc + cur; }, 0);
}
console.log(getTotal([2, 5, 3]));
