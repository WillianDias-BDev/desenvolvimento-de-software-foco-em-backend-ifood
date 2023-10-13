const express = require('express');

const app = express();

app.get('/primeira', (requisicao, resposta) => {
    resposta.send('É a vez de José jogar!')
})
app.get('/segunda', (requisicao, resposta) => {
    resposta.send('É a vez de Maria jogar!')
})
app.get('/terceira', (requisicao, resposta) => {
    resposta.send('É a vez de João jogar!')
})
app.get('/quarta', (requisicao, resposta) => {
    resposta.send('É a vez de Marcos jogar!')
})
app.get('/quinta', (requisicao, resposta) => {
    resposta.send('É a vez de Fernanda jogar!')
})

app.listen(3000);