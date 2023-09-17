const palavras = ["livro", "caneta", "sol", "carro", "orelha"]



function maiorQueCinco(arrayDePalavras) {
    for (const palavra of palavras) {
        if (palavra.length > 5) {
            console.log('existe palavra inválida')
            break
        } else if (palavra.length < 5) {
            console.log('array validado')
            break
        }

    }
}

maiorQueCinco(palavras);




