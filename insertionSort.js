const livros = require('./lista-livros');

function insertionSort(lista) {
    for (let atual = 0; atual < lista.length; atual++) {
        let analise = atual;
        while (lista[analise].preco < çlista[analise - 1].preco) {
            let itemAnalise = lista[analise];
            let intemAnterior = lista[analise - 1];

            lista[analise] = intemAnterior
            lista[analise] = intemAnalise

            analise--
        }
    }
    console.log(lista)
}