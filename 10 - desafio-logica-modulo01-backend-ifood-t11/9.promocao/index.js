const precos = [100, 50]

if (precos.length >= 3) {
    const tresOuMais = precos.reduce((acumulador, elementoAtual) => {
        menorAteAgora = acumulador

        if (elementoAtual < acumulador) {
            menorAteAgora = elementoAtual
        }
        return menorAteAgora
    })
    console.log(somaTotal(precos) - (tresOuMais * 0.5))

} else {
    console.log(somaTotal(precos))
}

function somaTotal(arrayDePrecos) {
    total = 0;

    for (const preco of arrayDePrecos) {
        total = total + preco;
    }
    return total
}

