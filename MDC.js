

function calcularMDC(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    
    return a;
}

const resultado = calcularMDC(4, 8);
console.log("MDC é :", resultado);