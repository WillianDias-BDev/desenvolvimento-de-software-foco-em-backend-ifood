const palpite = "a"

const palavra = "abelha"

//verificar cada letra da palavra e retornar a quantidade


let contador = 0;
for (let letra of palavra) {
    if (letra === palpite) {
        contador++
    }
}

console.log(contador)
