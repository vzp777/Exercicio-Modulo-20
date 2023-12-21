function encontrarIndices(arr) {
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

const array = [3, 7, 1, 12, 5];
const indices = encontrarIndices(array);
console.log("Índice do maior valor :", indices.indiceMaior);
console.log("Índice do menor valor :", indices.indiceMenor);
