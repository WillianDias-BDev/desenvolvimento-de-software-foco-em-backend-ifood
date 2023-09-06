const cidades = [
    "São Paulo",
    "Salvador",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

//pegar a letra cada letra de cada string/ guardar a que tiver mais caracteres
const maiorString = cidades.reduce((acumulador, elementoAtual, indice, array) => {
    let maiorAteAgora = acumulador

    if (elementoAtual.length > maiorAteAgora.length) {
        maiorAteAgora = elementoAtual
    }

    return maiorAteAgora
})

console.log(maiorString);