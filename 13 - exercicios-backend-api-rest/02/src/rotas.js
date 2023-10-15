const express = require('express');
const operacoes = require('./controladores/operacoes');

const rotas = express();

rotas.get('/convidados', operacoes.listarConvidados);
rotas.get('/convidado', operacoes.encontrarConvidado);
rotas.post('/convidados', operacoes.adicionarConvidado);
rotas.delete('/convidados/:nome', operacoes.removerConvidado);

module.exports = rotas;