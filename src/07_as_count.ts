// Readonly
const ROLES = ['admin', 'user', 'operator'] as const;

// Driving Union From The Array
type Role = (typeof ROLES)[number];

function setRole(r: Role) {
    console.warn(r);
}

setRole("admin");