const express = require('express');
const rotas = express();

rotas.get('/somar', (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    const operacao = num1 + num2

    return res.send(operacao.toString());
});

rotas.get('/subtrair', (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    const operacao = num1 - num2

    return res.send(operacao.toString());
});

rotas.get('/multiplicar', (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    const operacao = num1 * num2

    return res.send(operacao.toString());
});

rotas.get('/dividir', (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    const operacao = num1 / num2

    return res.send(operacao.toString());
});


module.exports = rotas;