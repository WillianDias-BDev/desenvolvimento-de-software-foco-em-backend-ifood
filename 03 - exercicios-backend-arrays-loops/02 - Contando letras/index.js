{
    const letras = ["e", "a", "e", "C", "E", "e"];
    //verificar cada item do array 
    //caso possua a letra E ou e, somar quantos itens existem com esta
    //configuraca -> Foram encontradas x letras "E" ou "e".
    let somaDeLetras = 0;

    for (let letra of letras) {
        if (letra === "E" || letra === 'e') {
            somaDeLetras++;
        }
    }
    if (somaDeLetras > 0) {
        console.log(`Foram encontradas ${somaDeLetras} letra(s) "E" ou "e".`)
    } else {
        console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
    }
    //caso contrario -> Nenhuma letra "E" ou "e" foi encontrada.
}

//resolucao do educador

{

    const letras = ["e", "a", "e", "C", "E", "e"];


    let contador = 0;
    for (let letra of letras) {
        if (letra === "e" || letra === "E") {
            contador++
        }
    }

    if (contador === 0) {
        console.log(`Nenhuma letra "E" ou "e" foi encontrada.`)
    } else if (contador === 1) {
        console.log('Foi enotrada 1 letra "E" ou "e"');
    } else {
        console.log(`Foram encontradas ${contador} letras "E" ou "e".`)
    }

}