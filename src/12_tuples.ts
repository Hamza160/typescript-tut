// tuples -> fixed length and fixed types -> order also matters
const userEntry: [string, number] = ['Hamza', 29]

// optional tuples
type ResponseRow = [status: number, message?: string]

const r11: ResponseRow = [200]

// readonly tuples
const corners: readonly [number, number] = [0, 0]

