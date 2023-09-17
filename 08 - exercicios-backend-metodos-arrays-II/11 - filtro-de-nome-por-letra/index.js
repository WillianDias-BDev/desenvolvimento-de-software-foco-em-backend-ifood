const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

let palavraFiltrada = [];

for (const palavra of nomes) {
    let primeiraLetra = palavra.slice(0, 1)
    if (primeiraLetra === 'a' || primeiraLetra === 'A') {
        palavraFiltrada.push(palavra)
    }
}
console.log(palavraFiltrada);