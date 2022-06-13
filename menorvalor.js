const livros = require('./lista-livros')
const precosLivros = [25, 15, 30, 50, 45, 20];

function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if (livros[atual].preco < arrProdutos[maisBarato]) {
            maisBarato = atual
        }
    }
    return maisBarato;
}



module.exports = menorValor;