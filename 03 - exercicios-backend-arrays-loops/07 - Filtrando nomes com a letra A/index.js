{

    const nomes = ["Ana", "Joana", "Carlos", "amanda"];

    //verificar cada letra inicial de cada item



    let palavrasA = []


    for (let letra of nomes) {
        if (letra[0] === 'A' || letra[0] === 'a') {
            palavrasA.push(letra) //.push foi utilizado para adicionar os itens 
        }
    }
    const resultado = palavrasA.join(', ') //.join() foi utilizado para incluir espaco e virgula na impressao

    console.log(resultado)




    //imprimir apenas as palavras com a letra inicial A ou a
}

//resolucao do educador

{
    const nomes = ["Ana", "Joana", "Carlos", "amanda"];

    const nomesComecadosComA = [];
    for (let nome of nomes) {
        const inicial = nome[0]

        if (inicial === "A" || inicial === "a") {
            nomesComecadosComA.push(nome);
        }
    }
    console.log(nomesComecadosComA);

}