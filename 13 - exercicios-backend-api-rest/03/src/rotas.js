const express = require('express');
const operacoes = require('./controladores/operacoes');

const rotas = express();

rotas.get('/livros', operacoes.listarLivros);
rotas.get('/livros/:id', operacoes.encontrarLivro);
rotas.post('/livros', operacoes.adicionarLivro);
rotas.put('/livros/:id', operacoes.substituirLivro);
rotas.patch('/livros/:id', operacoes.alterarLivro);
rotas.delete('/livros/:id', operacoes.excluirLivro);

module.exports = rotas;