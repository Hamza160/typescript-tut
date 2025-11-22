"use strict";
// interface - named shape for objects
const user333 = {
    id: '1',
    name: 'Hamza',
    email: 'hamza@gmail.com',
    createdAt: new Date()
};
const admin333 = {
    id: '1',
    name: 'Hamza',
    email: 'hamza@gmail.com',
    createdAt: new Date(),
    permission: ['admin'],
};
const admin333WithMeta = {
    id: '1',
    name: 'Hamza',
    email: 'hamza@gmail.com',
    createdAt: new Date(),
    permission: ['admin'],
    meta: {
        active: false,
    }
};
