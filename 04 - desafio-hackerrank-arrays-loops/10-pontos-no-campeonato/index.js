const resultados = ["V", "E", "V", "E"]

//3 pontos quando vence = V
//1 ponto quando empata = E
//nenhum ponto quando perde = D

//verificar cada letra, comparar o tipo com cada uma,
//somar todo o resultado 
//imprimir o numero total

let soma = 0;

for (let letra of resultados) {
    if (letra === "V") {
        soma = soma + 3
    } else if (letra === "E") {
        soma = soma + 1
    } else if (letra === "D") {
        soma = soma + 0
    }
}

console.log(soma)
