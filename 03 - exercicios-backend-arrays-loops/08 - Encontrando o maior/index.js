{

    const numeros = [3, 24, 1, 8, 11, 9, 15];

    //verificar cada numero -> imprimir o maior dentre eles


    let maiorNumero = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i]
        }

    } console.log(maiorNumero)
}

//resolucao do educador

{

    const numeros = [3, 24, 1, 8, 11, 9, 15];

    //percorrer o array
    //verificar se cada item é maior que o maior até agora
    //se for, subsittui. Esse item passa a ser o maior ate agora
    //repetir
    let maiorAteAgora = numeros[0];
    for (let numero of numeros) {
        if (numero > maiorAteAgora) {
            maiorAteAgora = numero;
        }

    }
    console.log(maiorAteAgora);
}