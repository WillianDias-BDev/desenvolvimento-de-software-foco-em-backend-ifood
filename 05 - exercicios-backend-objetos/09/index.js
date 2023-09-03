{
    const participantes = [
        { nome: "João" },
        { nome: "Ana" },
        { nome: "Beatriz" },
        { nome: "Maria" },
        { nome: "Ana Clara" },
        { nome: "Joana" },
        { nome: "Augusto" },
        { nome: "Renan" },
        { nome: "Patricia" },
        { nome: "Carlos" },
        { nome: "Renato" },
        { nome: "José" },
        { nome: "Roberto" },
        { nome: "Sara" },
        { nome: "Junior" },
        { nome: "Pedro" },
        { nome: "Vitor" },
        { nome: "Antonio" },
    ]

    //localizar o carlos e imprimir o indice 
    //que ele se encontra

    const cadeCarlos = (arrayDeParticipantes) => {
        const indiceDoCarlos = arrayDeParticipantes.findIndex((participante) =>
            participante.nome === 'Carlos');
        console.log(`Galera... O Carlos está na posição ${indiceDoCarlos}, corre lá!`);

    }

    cadeCarlos(participantes);
}

//resolucao do educador

{

    const participantes = [
        { nome: "João" },
        { nome: "Ana" },
        { nome: "Beatriz" },
        { nome: "Maria" },
        { nome: "Ana Clara" },
        { nome: "Joana" },
        { nome: "Augusto" },
        { nome: "Renan" },
        { nome: "Patricia" },
        { nome: "Carlos" },
        { nome: "Renato" },
        { nome: "José" },
        { nome: "Roberto" },
        { nome: "Sara" },
        { nome: "Junior" },
        { nome: "Pedro" },
        { nome: "Vitor" },
        { nome: "Antonio" },
    ];

    for (let posicao = 0; posicao < participantes.length; posicao++) {
        if (participantes[posicao].nome === 'Carlos') {
            console.log(`Galera... O Carlos está na posição ${posicao + 1}, corre lá!`)
        }

    }


}
