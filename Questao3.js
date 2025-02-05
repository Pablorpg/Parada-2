let itens = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];
let quantidades = [3, 1];

const precoTotal = (arrayProdutos, arrayQuantidades) => {
    return arrayProdutos.map((produto, index) => {
        
        let precoTotal = produto.preco * arrayQuantidades[index]


        return {
            nome: produto.nome,
            preco: produto.preco,
            valorTotal: precoTotal,
        }
    })
}

precoTotal(itens, quantidades)
console.log(precoTotal(itens, quantidades))
