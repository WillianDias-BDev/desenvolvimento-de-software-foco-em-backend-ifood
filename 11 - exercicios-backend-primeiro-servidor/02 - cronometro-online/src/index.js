// const express = require('express');
// const app = express();

// app.get('/', (requisicao, resposta) => {

//     let cronometro = 'Tempo atual do cronômetro: 00 minutos e 00 segundos'

//     resposta.send(cronometro)
// })

// app.get('/iniciar', (requisicao, resposta) => {
//     let segundos = 0;
//     let minutos = 0;


//     const cronometro = setInterval(function () {

//         const segFormatado = segundos < 10 ? `0${segundos}` : segundos;
//         const minFormatado = minutos < 10 ? `0${minutos}` : minutos;

//         console.log(`Tempo atual do cronômetro: ${minFormatado} minutos e ${segFormatado} segundos`);

//         segundos++;

//         if (segundos === 60) {
//             segundos = 0;
//             minutos++;

//             if (minutos === 60) {
//                 minutos = 0;
//             }
//         }

//     }, 1000);

//     resposta.send(cronometro)
// })



// app.listen(8000);

const express = require('express')

const app = express()

let minutos = 0
let segundos = 0


let intervalo

function incrementar() {
    segundos++
    if (segundos >= 60) {
        minutos++
        segundos = 0
    }
}

app.get('/', (req, res) => {
    const minutosFormatado = String(minutos).padStart(2, "0")
    const segundosFormatado = String(segundos).padStart(2, "0")
    return res.send(`Tempo atual: ${minutosFormatado}:${segundosFormatado}`)
})

app.get('/iniciar', (req, res) => {
    if (!intervalo) {
        intervalo = setInterval(incrementar, 1000)
    }
    return res.send('iniciado')
})

app.get('/pausar', (req, res) => {
    if (intervalo) {
        clearInterval(intervalo)
        intervalo = null
    }
    return res.send('pausado')
})

app.get('/continuar', (req, res) => {
    if (!intervalo) {
        intervalo = setInterval(incrementar, 1000)
    }
    return res.send('continuado')
})

app.get('/zerar', (req, res) => {
    if (intervalo) {
        clearInterval(intervalo)
        intervalo = null
        segundos = 0
        minutos = 0
    }
    return res.send('zerado')
})

app.listen(3000, () => console.log('Servidor rodando'))
