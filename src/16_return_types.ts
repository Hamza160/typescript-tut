// Inference Example
const doubleFunction = (n: number) => n * 2

// Explicit Return for exported/public function
export function toTitle(s:string): string {
    return `Hello, ${s}!`
}

function booleanToNumber(flag:boolean): number {
    if(flag){
        return 1;
    }else{
        return 0;
    }
}

async function loadCountInfered(){
    return 42;
}
loadCountInfered().then(count => console.log(count));