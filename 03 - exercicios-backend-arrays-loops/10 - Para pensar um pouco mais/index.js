{

    const numeros = [8, 11, 4, 20];

    let maiorNumero = numeros[0];
    let menorNumero = numeros[0]

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i]
        }
        if (numeros[i] < menorNumero) {
            menorNumero = numeros[i]
        }
    } console.log(maiorNumero - menorNumero);
}

//resolucao do educador

{

    const numeros = [8, 11, 4, 20];

    let maiorDif = -Number.MAX_VALUE
    for (let x of numeros) {
        for (let y of numeros) {
            const difAtual = x - y
            if (x - y > maiorDif) {
                maiorDif = difAtual
            }
        }
    }
    console.log(maiorDif)

}