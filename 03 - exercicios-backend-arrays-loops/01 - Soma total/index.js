{
    const numeros = [2, 3, 4, 6];

    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i];
    }
    console.log(soma);

}

//resolucao do educador

{

    const numeros = [2, 3, 4, 6];

    let somaTotal = 0;
    for (let item of numeros) {
        somaTotal = somaTotal + item;
    }

    console.log(somaTotal);
}
