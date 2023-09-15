function processData(input) {

    const [senha, senhaDigitada] = input.trim().split('\n')

    let armazenada = []

    for (let i = 0; i < senhaDigitada.length; i++) {
        if (senhaDigitada[i] === senha[armazenada.length]) {
            armazenada.push(senhaDigitada[i])
        }

    }

    let formatada = armazenada.join()
    formatada = formatada.replace(/,/g, '')


    if (formatada === senha) {
        console.log('SIM')
    } else {
        console.log('NAO')
    }

} 