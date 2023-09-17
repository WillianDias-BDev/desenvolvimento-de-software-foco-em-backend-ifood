const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const ateOito = cidades.filter((cidade) => {
    return cidade.length <= 8
})

console.log(ateOito);