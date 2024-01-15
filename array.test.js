
const encontrarIndices = require('./array');

test('Encontra índices corretamente', () => {
    const array = [3, 7, 1, 12, 5];
    const indices = encontrarIndices(array);

    expect(indices.indiceMaior).toBe(3); 
    expect(indices.indiceMenor).toBe(2); 
});

test('Encontra índices em array vazio', () => {
    const array = [];
    const indices = encontrarIndices(array);

    
    expect(indices.indiceMaior).toBeUndefined();
    expect(indices.indiceMenor).toBeUndefined();
});




