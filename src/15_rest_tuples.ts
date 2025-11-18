function sumAllNumber(...xs: number[]): number {
    return xs.reduce((a, b) => a + b, 0);
}

console.log(sumAllNumber(1,2,3,4));

// Tuple Rest
function makeRange(...args: [start:number, end:number, step?:number]){
    const [start, end, step=1] = args;
    const out: number[] = [];

    for(let i = start; i <= end; i+=step) {
        out.push(i);
    }

    return out;
}

console.log(makeRange(1,10,1));

function draw(x:number, y:number){
    console.log(x, y);
}

const points = [10,20]
// draw(...points); // not a fixed [number, number] tuple

const fixedPoints = [10, 20] as const;
draw(...fixedPoints)