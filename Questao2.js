let produtos = [
    { nome: "Camiseta", categoria: "Roupas" },
    { nome: "Celular", categoria: "Eletrônicos" },
]

let precos = [
    { nome: "Camiseta", preco: 20 },
    { nome: "Celular", preco: 500 },
]

const produtoPorCategoria = (categoria, arrayProduto) => {
    return arrayProduto.filter((produtos) => produtos.categoria === categoria)
}
console.log(produtoPorCategoria('Eletrônicos', produtos))