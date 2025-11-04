type User = {
    id: string;
    name: string;
    email?: string;
    readonly createdAt: Date; // Read only can't be reassigned
}

const user1: User = {
    id: 'u1',
    name: 'Hamza',
    email: 'hamzaashraf160@gmail.com',
    createdAt: new Date(),
}

user1.createdAt = new Date();

const user2: User = {
    id: 'u2',
    name: 'john',
    createdAt: new Date(),
}

type User1 = { email?: string };
type User2 = { email: string | undefined };