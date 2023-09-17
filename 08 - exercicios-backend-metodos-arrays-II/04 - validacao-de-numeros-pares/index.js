const numeros = [122, 4, 6, 14, 8, 44, 7]

const apenasPares = numeros.every(function (numero) {
    return numero % 2 === 0
})

if (apenasPares) {
    console.log('array válido')
} else {
    console.log('array inválido')
}