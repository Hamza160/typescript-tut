function greetPersonOptional(name?: string) {
    const upperResult = name ? name?.toLowerCase() : 'Guest';
    return `Hello, ${upperResult}`;
}

console.log(greetPersonOptional('Hamza'))
console.log(greetPersonOptional())

function greetPersonDefault(name: string = 'Guest'): string {
    return `Hello, ${name.toLowerCase()}!`;
}

console.log(greetPersonDefault('Hamza'))
console.log(greetPersonDefault())

function connect(host: string, port?: number, secure?: boolean) {
    const p = port ?? 80;
    const s = secure ?? false;

    return `Connect ${host} ${p} ${secure}`;
}

console.log(connect('localhost', 8080, true))