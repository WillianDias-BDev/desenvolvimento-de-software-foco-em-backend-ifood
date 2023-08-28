const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];


//Você deve imprimir na tela a nota final da manobra, 
//que é a média das notas que não foram descartadas.



let maiorNumero = numeros[0];
let menorNumero = numeros[0]

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i]
    }
    if (numeros[i] < menorNumero) {
        menorNumero = numeros[i]
    }
} let notaFinal = maiorNumero + menorNumero - notas

console.log(notaFinal)