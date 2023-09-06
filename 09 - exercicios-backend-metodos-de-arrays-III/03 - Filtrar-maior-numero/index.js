const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44, 200]


const maiorNumero = numeros.reduce((acumulador, elementoAtual, indice, array) => {
    let maiorAteAgora = acumulador

    if (elementoAtual > maiorAteAgora) {
        maiorAteAgora = elementoAtual
    }

    return maiorAteAgora
})

console.log(maiorNumero);