// value must be everything from A and from B
type inter1 = { id: string }
type inter2 = { createdAt: Date }

type Entity = inter1 & inter2 // merged both types

const e: Entity = {
    id: '8980',
    createdAt: new Date(),
}

type Usr1 = { username: string }
type Usr2 = { email: string }

type Usr = Usr1 & Usr2;

const u: Usr = {
    username: 'Hamza555',
    email: 'hamza555@gmail.com',
}

// Can't intersect conflicting types
type NumberHolder = { a: number }
type StringHolder = { a: string }

type NumberStringHolder = NumberHolder & StringHolder

type Product = { id: string; title: string }
type Priced = {price:number}

type PricedProduct = Product & Priced