// object shapes -> similar to interface
// union types (A | B)
// intersection types (A & B)

type Person1 = {
    id: string;
    address: string;
    salary: number;
}

const person1: Person1 = {
    id: '1',
    address: 'St # 3 NBHDA',
    salary: 100,
}

// Union Type Aliases
type Status = 'new' | 'paid' | 'pending'

function nextActionCheck(s: Status) {
    switch (s) {
        case 'new':
            return 'new';
        case 'paid':
            return 'paid';
        case 'pending':
            return 'pending';
    }
}

// Intersection
type ToMerge1 = {price:number;}
type ToMerge2 = {stock:number};

type MergedProductInfo = ToMerge1 & ToMerge2

// Intersections
