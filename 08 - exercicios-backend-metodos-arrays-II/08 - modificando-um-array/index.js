const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

//diminuir todas letras
//inserir letra maisucula apenas nas iniciais
//inserir um indice em cada letra
//imprimir na tela 

let arrayDeFrutas = [];

for (const letra of frutas) {
    let primeiraLetra = letra.slice(0, 1)
    let letrasRestantes = letra.slice(1)
    arrayDeFrutas.push(primeiraLetra.toUpperCase() + letrasRestantes.toLowerCase() + ' ')

}

for (let i = 0; i < arrayDeFrutas.length; i++) {
    arrayDeFrutas[i] = i + " - " + arrayDeFrutas[i]

}


console.log(arrayDeFrutas)