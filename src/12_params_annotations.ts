function func1(a: number, b: number): number {
    return a + b
}

const nums2 = [1, 2, 3];

const doubled = nums2.map(x => x * 2);
console.log(doubled)

const times2 = (n: number) => n * 2

type Point = { x: number, y: number }

function distanceFromOrigin(p: Point): number {
    return Math.hypot(p.x, p.y);
}
distanceFromOrigin({x:0,y:10})