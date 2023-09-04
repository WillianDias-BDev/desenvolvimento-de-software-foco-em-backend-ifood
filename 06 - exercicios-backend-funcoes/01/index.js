const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

let nota = 0;
let acertos = 0;

function corrigirProva(avaliacao) {
    const { questoes, } = prova

    for (let i = 0; i < questoes.length; i++) {
        if (questoes[i].resposta === questoes[i].correta) {
            acertos++
            nota = acertos * 2


        }

    }
    console.log(`O aluno(a) João acertou ${acertos} questões e obteve nota ${nota}`);
}
corrigirProva(prova);

