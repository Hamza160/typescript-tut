// typeof for Primitives
function describeTypeOf(x: unknown) {

    if (typeof x === 'string') {
        return 'string'
    }

    if (typeof x === 'number') {
        return 'number'
    }

    if (typeof x === 'boolean') {
        return true
    }

    if (typeof x === 'bigint') {
        return 'bigint'
    }

    if (typeof x === 'symbol') {
        return 'symbol'
    }

    if (typeof x === 'undefined') {
        return 'undefined'
    }

    if (typeof x === 'function') {
        return () => {
        }
    }

    if (x === null) return null

    return "object"
}

console.log(
    describeTypeOf('hi'),
    describeTypeOf(23),
    describeTypeOf(true),
    describeTypeOf(10,),
    describeTypeOf(Symbol('Hamza')),
    describeTypeOf(undefined),
    describeTypeOf(() => {
    }),
    describeTypeOf(null),
    describeTypeOf({}),
)


function info(z: unknown) {
    if(Array.isArray(z)) {
        return 'array'
    }

    if(z instanceof Date){
        return new Date()
    }

    if(z instanceof Error){
        return new Error("asd")
    }

    if(typeof z === 'object'){
        return {}
    }
}

console.log(
    info([1, 2, 3, 4, 5]),
    info(new Date()),
    info(new Error('oops! Error occured')),
    info({x: 1})
)