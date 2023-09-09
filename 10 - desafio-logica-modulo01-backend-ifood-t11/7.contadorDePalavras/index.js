const texto = 'Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer '

let textoLimpo = texto.split(' ');
let soma = 0;


for (const caractere of textoLimpo) {
    if (caractere !== '' && caractere !== ' ') {
        soma++
    }
}
console.log(soma)

