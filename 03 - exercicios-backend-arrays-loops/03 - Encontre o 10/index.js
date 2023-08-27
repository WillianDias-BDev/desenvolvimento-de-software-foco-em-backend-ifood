{
    const numeros = [54, 22, 10, 87, 20, 284];

    //verificar cada item se possui o numero 10
    //caso exista -> mostre o indice em que o numero
    //10 se encontra
    let encontrado = false;


    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === 10) {
            console.log(i)
            encontrado = true;
        }

    }
    if (!encontrado)
        console.log(`-1`)

    //caso não exista -> -1
}

//resolucao do educador

{

    const numeros = [54, 22, 9, 87, 10, 284];

    let resposta = -1;
    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];
        if (numero === 10) {
            resposta = i;
            break;
        }
    }

    console.log(resposta);


}