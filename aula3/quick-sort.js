const listaLivros = require('./array')

function quickSort(array, esquerda, direita) {
    if (array.length > 1) {
        let varTemp = particiona(array, esquerda, direita);
    }
    return array;
}

function particiona(array, esquerda, direita) {
    let pivo = array[Math.floor(esquerda + direta / 2)]
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1))