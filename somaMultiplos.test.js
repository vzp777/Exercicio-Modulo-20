
const somaMultiplos = require('./somaMultiplos');

test('Calcula a soma dos múltiplos de 5 e 7 corretamente', () => {
    const resultado = somaMultiplos();

   
    expect(resultado).toBe(156361);
});