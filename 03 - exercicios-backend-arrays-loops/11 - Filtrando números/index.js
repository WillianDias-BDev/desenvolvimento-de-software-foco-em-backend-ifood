{
    const original = [5, 7, 13, 17, 26, 34, 118, 245];



    //percorra cada item do array 
    let numerosFilrados = []

    for (let i = 0; i < original.length; i++) {
        const numero = original[i];

        if (numero >= 10 && numero <= 20 || numero > 100) {
            numerosFilrados.push(numero)
        }
    }

    console.log(numerosFilrados);
    //imprima apenas os numeros entre 10 e 20 & meaiores que 100
}

//resolucao do educador

{

    const original = [5, 7, 13, 17, 26, 34, 118, 245];

    let filtrados = [];

    for (let numero of original) {
        if ((numero >= 10 && numero <= 20 || numero > 100)) {
            filtrados.push(numero);
        }
    }
    console.log(filtrados);
}