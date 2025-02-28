// //4. **Encontrar Produtos com Preço Mínimo:**
// - Dado um array de objetos que representam produtos:
// Crie uma função que recebe um preço mínimo como parâmetro e retorna um novo array contendo apenas os produtos cujo preço é igual ou superior ao preço mínimo.


function encontrarProdutosComPrecoMinimo(produtos, precoMinimo) {
  return produtos.filter(produto => produto.preco >= precoMinimo);
}

const produtos = [
  { nome: "Produto 1", preco: 50 },
  { nome: "Produto 2", preco: 100 },
  { nome: "Produto 3", preco: 30 },
  { nome: "Produto 4", preco: 200 }
];

const precoMinimo = 50;
const produtosFiltrados = encontrarProdutosComPrecoMinimo(produtos, precoMinimo);

console.log(produtosFiltrados);
