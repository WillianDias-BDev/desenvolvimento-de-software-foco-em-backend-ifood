const jogadores = [
    {
        "nome": "Herman",
        "jogada": 0
    },
    {
        "nome": "Rhodes",
        "jogada": 1
    },
    {
        "nome": "Beach",
        "jogada": 1
    },
    {
        "nome": "Laurel",
        "jogada": 0
    },
    {
        "nome": "Beatrice",
        "jogada": 0
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
]

let numeroUm = 0;
let numeroZero = 0;

for (const jogador of jogadores) {
    if (jogador.jogada === 0) {
        numeroZero++
    } if (jogador.jogada === 1) {
        numeroUm++
    }
}

if (numeroUm > 1 && numeroZero === 1) {

    const indice = jogadores.findIndex(numero => numero.jogada === 0)
    console.log(jogadores[indice].nome)


} else if (numeroZero > 1 && numeroUm === 1) {

    const indice = jogadores.findIndex(numero => numero.jogada === 1)
    console.log(jogadores[indice].nome)


} else {
    console.log('NINGUEM')
}
