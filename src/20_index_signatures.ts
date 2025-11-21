// Index Signature
type NumberDict = {[key: string]: number}

const counters: NumberDict = {}
counters['Likes'] = 1
counters['Comments'] = 1
counters['Shares'] = 1000

// Record
type Matrics = Record<"likes" | "views" | "shares", number> // tight and safter

const mm: Matrics = {likes:1, views:1, shares:1}

// Maps
const priceMap = new Map<string, number>()
priceMap.set('likes', 1)

// Loose Map
type LooseMap = Record<string, number | undefined>
const lm: LooseMap = {}
lm['likes'] = undefined
lm['views'] = 1000