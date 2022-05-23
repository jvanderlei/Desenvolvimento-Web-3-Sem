const soma = (a, b) => {
    return a + b
}

const fatorial = (a) => {
    let fatorial = a;
    for (let i = a - 1; i > 0; i--) {
        fatorial = fatorial * i;
    }
    return fatorial
}

console.log(soma(2, 2))
console.log(fatorial(5))