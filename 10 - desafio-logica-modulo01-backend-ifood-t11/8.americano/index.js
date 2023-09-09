//somar todos elementos 
//contar o indice até seu limite em loop(zerar o loop quando chegar no fim 
// e voltar e contar o restante)

const numeros = [1, 3, 2, 1, 4]

const somaTotal = numeros.reduce((acumulador, elementoAtual, indice, array) => {
    todosValores = elementoAtual + acumulador
    return todosValores
})

let indiceAtual = 0;
let contagem = 0
while (indiceAtual < somaTotal) {
    indiceAtual++
    contagem++
    if (contagem === numeros.length && contagem === 0) {//quando chegar no limite reiniciar a contagem
        contagem = 0
    } else if (contagem > numeros.length) {//quando chegar no limite reiniciar a contagem com 1
        contagem = 1

    }
}
console.log(contagem)
//quando a contagem chegar a soma de todos valores
//apontar o indice atual.






// const meuArray = [1, 2, 3, 4, 5];
// const numeroDeRepeticoes = 3;

// let contador = 0;
// let indice = 0;

// while (contador < numeroDeRepeticoes) {
//     if (indice >= meuArray.length) {
//         // Resetar o índice quando atingir o final do array
//         indice = 0;
//         contador++;
//     }

//     console.log(`Iteração ${contador + 1}, Índice ${indice}, Valor ${meuArray[indice]}`);

//     indice++;
// }

// const meuArray = [1, 3, 2, 1];
// const numeroDeContagens = 4;

// for (let contador = 0; contador < numeroDeContagens; contador++) {
//     const indice = contador % meuArray.length;
//     const valor = meuArray[indice];

//     console.log(`Contagem ${contador + 1}, Índice ${indice}, Valor ${valor}`);
// }


// const numeros = [1, 1, 1];

// Soma todos os elementos
// let soma = numeros.reduce((acumulador, elementoAtual) => acumulador + elementoAtual, 0);

// // Conta o índice até seu limite em um loop
// const limite = numeros.length;
// let indiceAtual = 0;

// while (soma > 0) {
//     indiceAtual++;
//     if (indiceAtual === limite) {
//         indiceAtual = 0; // Reinicia o loop quando atinge o fim
//     }
//     soma--; // Reduz o valor da soma a cada iteração
// }

// console.log("Soma:", soma); // Soma deve ser zero no final
// console.log("Índice:", indiceAtual); // Índice final após o loop
