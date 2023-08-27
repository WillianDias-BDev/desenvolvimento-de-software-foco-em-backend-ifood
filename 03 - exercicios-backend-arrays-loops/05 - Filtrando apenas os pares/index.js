{
    const original = [1, 4, 12, 21, 53, 88, 112];


    //impimir apenas numeros pares
    for (let numeros of original) {
        if (numeros % 2 === 0)
            console.log(numeros);


    }
}

//resolucao do educador

{

    const original = [1, 4, 12, 21, 53, 88, 112];

    //percorrer o array analisando cada item
    //verificar se o item é par
    // -> inserir no novo array
    //olhar o proximo numero e repetir
    //no final: imprimir na tela

    let pares = [];
    for (let numero of original) {
        if (numero % 2 === 0) {
            // é par
            pares.push(numero); //inseri no array de pares
        }
    }
    console.log(pares);


}