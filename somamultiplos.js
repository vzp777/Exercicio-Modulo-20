function somaMultiplos() {
    let soma = 0;

    for (let i = 1; i < 1000; i++) {
        if (i % 5 === 0 || i % 7 === 0) {
            soma += i;
        }
    }

    return soma;
}

const resultadoBasico = somaMultiplos();
console.log("Soma é:", resultadoBasico);
