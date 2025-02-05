let produtos = [
    { nome: "Camiseta", categoria: "Roupas" },
    { nome: "Celular", categoria: "Eletrônicos" },
]

let precos = [
    { nome: "Camiseta", preco: 20 },
    { nome: "Celular", preco: 500 },
]

const combinarProdutos = (arrayProdutos, arrayPrecos,) => {
    // console.log('Array Produtos: ', arrayProdutos)
    // console.log('Array Precos: ', arrayPrecos)
    return arrayProdutos.map((produto) => {
        console.log('Obejto Produto:', produto)
        let precoProduto = arrayPrecos.find((preco) => preco.nome === produto.nome);
        console.log('Obejto Produto:', produto)
        return {
            nome: produto.nome,
            categoria: produto.categoria,
            preco: precoProduto.arrayPrecos
        }
    })
}

combinarProdutos(produtos, precos)