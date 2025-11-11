function printId(id: number | string) {
    // Narrowing
    if (typeof id === "string") {
        console.log(id.toString());
    } else {
        console.log(id.toFixed(2));
    }
}

// Object Union
type Admin = {
    role: "Admin";
    permissions: string[];
}

type Customer = {
    role: "Customer";
    loyaltyPoints:number;
}

function describeUser(user: Admin | Customer) {
    if(user.role === "Admin") {
        console.log(user.permissions);
    }else{

    }
}

function describeUserWithInOperator(user : Admin | Customer) {
    if('permissions' in user) {
        console.log(user.role, 'Admin User');
    }else{
        console.log(user.loyaltyPoints);
    }
}

// array of unions
const arrayOfUnion: (string | number)[] = ["a", 1, "b", 2];
// unions of array
const unionOfArray: string[] | number[] = Math.random() > 0.1 ? ["x", "y"] : [1, 3]

unionOfArray.push(1)