const primeiraLetra = "a";
const segundaLetra = "v";
const palavras = ["aveia", "manha", "ave"];

const ambasAsLetras = []

for (palavra of palavras) {
    if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra) {
        ambasAsLetras.push(palavra);
    }
}
if (ambasAsLetras.length > 0) {
    for (letras of ambasAsLetras) {
        console.log(letras);
    }
} else {
    console.log('NENHUMA')
}