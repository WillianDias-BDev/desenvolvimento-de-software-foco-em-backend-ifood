const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];


//Você deve imprimir na tela a nota final da manobra, 
//que é a média das notas que não foram descartadas.

//achar achar a menor nota
//achar a maior nota
//somar todas as notas
//diminuit a soma pela maior nota
//diminuir a soma pela menor nota
//dividir pelo indice - 2

let maiorNota = notas[0];
let menorNota = notas[0];
let somaTotal = 0;

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > maiorNota) {
        maiorNota = notas[i]


    }
} for (let i = 1; i < notas.length; i++) {
    if (notas[i] < menorNota) {
        menorNota = notas[i]
    }

}
for (let item of notas) {
    somaTotal = somaTotal + item;
}
const calculo = somaTotal - (menorNota + maiorNota);
const notaFinal = calculo / (notas.length - 2)

console.log(notaFinal)




















