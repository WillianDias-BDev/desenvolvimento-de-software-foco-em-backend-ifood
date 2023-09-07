const lista = [1, 2, 3, 4]

const soma = lista.reduce((acumulador, elementoAtual) => {
    somaDeValor = acumulador + elementoAtual
    return somaDeValor
})

console.log(soma);