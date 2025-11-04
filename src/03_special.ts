// Union Types
let title: string | undefined = undefined;

// void: when functions doesn't return a useful value
function log(msg: string): void {
    console.log(msg);
}

// Never return a value
function fail(msg: string): never {
    throw new Error(msg);
}

// DO NOT USE ANY => Try to ignore as much as possible
const valueAny: any = JSON.parse('{"x":1}')
valueAny.notThere.toFixed(2) // this compiles but  can break/explode at run time

