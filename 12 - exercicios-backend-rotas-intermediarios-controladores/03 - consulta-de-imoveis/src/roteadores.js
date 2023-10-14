const express = require('express');
const imoveis = require('./controladores/imoveis')

const rotas = express();

rotas.get('/imoveis', imoveis.listarImoveis);
rotas.get('/imoveis/:id', imoveis.obterImovel);

module.exports = rotas;

