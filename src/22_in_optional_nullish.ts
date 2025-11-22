// in nullish
type ExampleOne = { role: "Admin"; permissions: [] }
type ExampleTwo = { role: "User"; expiresAt: Date }

type UserExample = ExampleOne | ExampleTwo

function describeUserExample(u: UserExample) {
    if ('permissions' in u) {
        return `Admin ${u.permissions.join(',')}`
    }

    return `User ${u.expiresAt.toISOString()}`
}

console.log(describeUserExample({role: "User", expiresAt: new Date()}))

// optional nullish -> avoid runtimes crashes
// ?? nullish
// || false
// object?. optionals

type ProfileN3 = {
    name: string;
    contact?: { email?: string };
}

const p1: ProfileN3 = {name: 'John'}
const p2: ProfileN3 = {name: 'Ben', contact: {email: "ben@gmail.com"}}

console.log(p1.contact?.email)
console.log(p2.contact?.email)

// ?? -> uses right hand default only when the left is null or undefined
// || -> uses default when the left is any falsy value (0, "", null, undefined, NAN)

const countFromServerN3: number | null = 0;
const levelFromServerN3: string | undefined = '';

const aN3 = countFromServerN3 ?? 100 // keeps the 0
const bN3 = levelFromServerN3 || 100 // keeps the 100

console.log(aN3);