const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        },

    ]
}



let totalAPagar = 0;
let indiceSoma = 0

function imprimirResumoDoCarrinho() {
    const { produtos } = carrinho;

    for (let i = 0; i < produtos.length; i++) {
        indiceSoma += produtos[i].qtd

    }
    for (const produto of produtos) {
        totalAPagar += produto.precoUnit * produto.qtd / 100
    }

    totalFormatado = totalAPagar.toFixed(2).replace('.', ',')

    console.log(`Cliente: ${carrinho.nomeDoCliente} 
        Total de itens: ${indiceSoma} itens
        Total a pagar: R$ ${totalFormatado}`)




}






imprimirResumoDoCarrinho()






