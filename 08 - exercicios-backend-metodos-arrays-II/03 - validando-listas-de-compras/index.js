const palavras = ["arroz", "feijão", "carne", "macarrão"]


let validarLista = palavras.some(palavra => {
    return palavra === 'cerveja' || palavra === 'vodka'
})

if (validarLista) {
    console.log('revise sua lista, joão. possui bebida com venda proibida!')

} else {
    console.log('tudo certo, vamos as compras!')
}

