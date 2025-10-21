let num1: number = 1;

function calculate(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(calculate(num1, 6));


function getTotal(numbers: Array<number>): number {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}

console.log(getTotal([2, 5, 3]))