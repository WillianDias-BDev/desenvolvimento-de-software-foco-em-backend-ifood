const express = require('express');
const { instrutores } = require('../../../API-REST/projeto/src/banco-de-dados');

const app = express();

let jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let proximoJogadorIndex = 0;


app.get('/', (req, res) => {

    while (proximoJogadorIndex < jogadores.length) {
        const proximo = jogadores[proximoJogadorIndex];
        res.send(`É a vez de ${proximo} jogar!`)
        proximoJogadorIndex++
    }

    if (proximoJogadorIndex === jogadores.length) {
        proximoJogadorIndex = 0
    }

});

app.delete('/remover', (req, res) => {
    let indice = req.query.indice;

    const removerJogadorIndex = jogadores.findIndex((jogador) => {
        return Number(jogador.indice) === Number(indice);
    });

    if (removerJogadorIndex === -1) {
        return res.send(`Não existe jogador no índice informado ${indice} para ser removido.`)
    }

    jogadores.splice(indice, 1);

    if (indice.length === 0) {
        return res.send(`Não existe jogador no índice informado ${indice} para ser removido.`)
    }

    return res.send(jogadores)

})

app.post('/adicionar', (req, res) => {
    let indice = req.query.indice;
    let nome = req.query.nome;

    if (indice === undefined) {
        jogadores.push(nome);
    } else {
        jogadores.splice(indice, 0, nome);
    }



    return res.status(200).json(jogadores);

})








app.listen(8000);