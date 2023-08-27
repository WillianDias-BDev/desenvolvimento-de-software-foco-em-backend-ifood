{
    const filaDeDentro = ["Jose", "Maria", "Joao"];
    const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];



    {
        //adicionar mais pessoas a fila de dentro limitando a 5 pessoas somente
        while (filaDeDentro.length < 5) {
            const pessoa = filaDeFora.shift();
            filaDeDentro.push(pessoa);
        }
        console.log(filaDeDentro);

    }

}

//resolucao do educador

{

    const filaDeDentro = ["Jose", "Maria", "Joao"];
    const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

    while (filaDeDentro.length < 5) {
        const primeiroDeFora = filaDeFora.shift()
        //se nao tiver ninguem na fila de fora
        if (primeiroDeFora === undefined) {
            break;
        }
        filaDeDentro.push(primeiroDeFora)
    }
    console.log(filaDeDentro);
    console.log(filaDeFora)


}