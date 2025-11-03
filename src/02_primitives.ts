let username: string = "Hamza"
let age: number = 20
let isCreator: boolean = true;
const big: bigint = 2n ** 63n - 1n;

// TS2365: Operator + cannot be applied to types bigint and number
// const mixed = big + age;

// Symbol Type
const TOKEN: unique symbol = Symbol("TOKEN");