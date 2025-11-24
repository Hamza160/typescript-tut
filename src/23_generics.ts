// understand what is "type parameter" <T>
// how typescript infer this <T> from your arguments automatically


// generics is a function where types are "blanks" -> you fill in later
// <T> is a placeholder
// TS will try to understand what T should be

// infer T
// id(5) -> T is a number
// id('string') -> T is a string
// id<number>(5) // don't need to pass it TS will infer it
function id<T>(x: T): T {
    return x;
}

const xyz = id(5)
console.log(xyz + 1, id("Hamza"), id([1, 2, 3, 4, 5, 6]))

function firstGen<T>(arr: T[]): T | undefined {
    return arr[0]
}

console.log(firstGen([1, 2, 3]))

// without generics => wrap(value: unknown) => unknown
// with generics => wrap(value: T) => T // keep the exact type
function wrap<T>(value: T): { value: T } {
    return {value}
}