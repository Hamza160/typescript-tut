// interface - named shape for objects

interface User333 {
    id: string;
    name: string;
    email?: string;
    readonly createdAt: Date;
}

const user333: User333 = {
    id: '1',
    name: 'Hamza',
    email: 'hamza@gmail.com',
    createdAt: new Date()
}

// Extends
interface Admin333 extends User333 {
    permission: string[];
}

const admin333: Admin333 = {
    id: '1',
    name: 'Hamza',
    email: 'hamza@gmail.com',
    createdAt: new Date(),
    permission: ['admin'],
}

interface WithMeta {
    meta: {
        active: boolean;
    }
}

interface AdminWithMeta extends Admin333, WithMeta {
}

const admin333WithMeta: AdminWithMeta = {
    id: '1',
    name: 'Hamza',
    email: 'hamza@gmail.com',
    createdAt: new Date(),
    permission: ['admin'],
    meta:{
        active: false,
    }
}
