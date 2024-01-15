function encontrarIndices(arr) {
    if (arr.length === 0) {
        return { indiceMaior: undefined, indiceMenor: undefined };
    }

    const indices = arr.reduce((acc, valor, indice) => {
        if (valor > arr[acc.indiceMaior]) {
            acc.indiceMaior = indice;
        }

        if (valor < arr[acc.indiceMenor]) {
            acc.indiceMenor = indice;
        }

        return acc;
    }, { indiceMaior: 0, indiceMenor: 0 });

    return indices;
}

module.exports = encontrarIndices;
