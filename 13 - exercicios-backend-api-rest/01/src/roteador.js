const express = require('express');
const recurso = require('./controladores/recurso-a');

const rotas = express();

rotas.get('/alunos', recurso.listarAlunos);
rotas.get('/:id', recurso.exibirAluno);
rotas.post('/alunos', recurso.cadastrarAluno);
rotas.delete('/:id', recurso.excluirAluno);

module.exports = rotas;