const livros = require('./lista-livros')
const precosLivros = [25, 15, 30, 50, 45, 20];



let maisBarato = 0;

for (let atual = 0; atual < precosLivros.length; atual++) {
    if (livros[atual].preco < precosLivros[maisBarato]) {
        maisBarato = atual
    }
}

console.log('O livro mais barati custa ${livros[maisBarato].preco e o titulo é [maisBarato].titulo}')